
import express from 'express';
import https from 'https';
import session from 'express-session';
import passport from 'passport';
import path from 'path';
const cors = require('cors');
import bodyParser from 'body-parser';
import fs from 'fs';
import helmet from 'helmet';
import compression from 'compression';
import dotenv from 'dotenv';
import auth0Strategy from '../external-services/auth/strategies/auth0.strategy';
import googleStrategy from '../external-services/auth/strategies/google.strategy';

dotenv.config();

const { ROOT_URL } = require('./endpoint');
const cspMiddleware = require('../middlewares/http/csp');
const { logger } = require('./logger/logRotation');

// Buid absolutes path
const privateKeyPath = path.resolve(__dirname, '../ssl/server.key');
const certificatePath = path.resolve(__dirname, '../ssl/server.crt');

// Load les certificats
const privateKey = fs.readFileSync(privateKeyPath, 'utf8');
const certificate = fs.readFileSync(certificatePath, 'utf8');
const credentials = { key: privateKey, cert: certificate };

// Create Express application and HTTP server
const app = express();
const server = https.createServer(credentials, app);

// Import and configure WebSocket server
const configureWebSocket = require('./websocketServer');
configureWebSocket(server);

// Passport configuration
passport.use(auth0Strategy);
passport.use(googleStrategy);

// Serialization / Deserialization of the user
passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user as Express.User);
});

app.use(passport.initialize());
app.use(passport.session());

// use CSP middleware
app.use(cspMiddleware);


app.use(bodyParser.json()); // Parse JSON request bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded request bodies
app.use(cookieParser());
app.use(helmet({ contentSecurityPolicy: false })); // Disable default CSP directives from Helmet
app.use(compression()); // Compress HTTP responses

// Create a write stream for logging
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

// Import routers
const backendCspReport = require('./routers/backendCspReport');
const backendAdmin = require('./routers/backendAdmin');
const backendAgent = require('./routers/backendAgent');
const backendUser = require('./routers/backendUser');

// Configure backend routes
app.use('/backend-csp-report', backendCspReport);
app.use('/backend-admin', backendAdmin);
app.use('/backend-agent', backendAgent);
app.use('/backend-user', backendUser);

// Middleware to handle unhandled errors
app.use((err: any, req: any, res: any, next: any) => {
  logger.error('Unhandled error:', err.stack);
  res
    .status(500)
    .sendFile(path.join(__dirname, '../frontend/error/error-page500.html'));
});

// Middleware pour les sessions
app.use(
  session({
    secret: 'YOUR_SECRET_KEY', 
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Routes de connexion avec Auth0 et Google
app.get(
  '/login',
  passport.authenticate('auth0', {
    scope: 'openid email profile',
  })
);

app.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// Auth0 callback
app.get(
  '/callback',
  passport.authenticate('auth0', {
    failureRedirect: '/failure',
  }),
  (req, res) => {
    res.redirect('/');
  }
);

// Google callback
app.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/failure' }),
  (req, res) => {
    res.redirect('/');
  }
);

app.use(
  session({
    secret: process.env.SESSION_SECRET!,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: process.env.NODE_ENV === 'production',  // Assure que les cookies sont envoyés uniquement via HTTPS en production
      maxAge: 3600000,  // Session expire après 1 heure
      sameSite: 'lax',  // Prévention contre les attaques CSRF
    },
  })
);


// Page d'accueil protégée
app.get('/profile', (req, res) => {
  if (req.isAuthenticated()) {
    res.send(`Hello, ${(req.user as any).displayName}`);
  } else {
    res.redirect('/login');
  }
});

app.get('/failure', (req, res) => {
  res.send('Failed to authenticate');
});

app.get('/logout', (req, res) => {
  req.logout(() => {
    res.redirect('/');
  });
});



// Middleware to handle 404 errors
app.use((req: any, res: any) => {
  logger.warn(`404 Not Found: ${req.method} ${req.url}`);
  res
    .status(404)
    .sendFile(path.join(__dirname, '../frontend/error/error-page404.html'));
});

export default app;
