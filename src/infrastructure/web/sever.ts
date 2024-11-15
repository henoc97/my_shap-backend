
import express from 'express';
import https from 'https';
import session from 'express-session';
import passport from 'passport';
import path from 'path';
import bodyParser from 'body-parser';
import fs from 'fs';
// import helmet from 'helmet';
import dotenv from 'dotenv';
import auth0Strategy from '../external-services/auth/strategies/auth0.strategy';
import googleStrategy from '../external-services/auth/strategies/google.strategy';
import adminRouter from '../../presentation/routers/admin.router';
import agentRouter from '../../presentation/routers/agent.router';
import feeRouter from '../../presentation/routers/fee.router';
import notificationRouter from '../../presentation/routers/notification.router';
import transactionRouter from '../../presentation/routers/transaction.router';
import transferRouter from '../../presentation/routers/transfer.router';
import userRouter from '../../presentation/routers/user.router';

dotenv.config();

// import { ROOT_URL } from './endpoint';
// import cspMiddleware from '../middlewares/http/csp';
import logger from '../../application/helper/logger/logRotation';
import { error } from 'console';
import { validateDto } from '../../application/helper/middlewares/validate-dto.middleware';

// Buid absolutes path
const privateKeyPath = path.resolve(__dirname, '../ssl/server.key');
const certificatePath = path.resolve(__dirname, '../ssl/server.crt');

// Load les certificats
const privateKey = fs.readFileSync(privateKeyPath, 'utf8');
const certificate = fs.readFileSync(certificatePath, 'utf8');
const credentials = { key: privateKey, cert: certificate };

// Create Express application and HTTP server
const app = express();


// // Import and configure WebSocket server
// const configureWebSocket = require('./websocketServer');
// configureWebSocket(server);

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

// use CSP middleware
// app.use(cspMiddleware);


app.use(bodyParser.json()); // Parse JSON request bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded request bodies
// app.use(cookieParser());
// app.use(helmet({ contentSecurityPolicy: false })); // Disable default CSP directives from Helmet
// app.use(compression()); // Compress HTTP responses

// Create a write stream for logging
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  console.info(`${req.method} ${req.url}`);
  next();
});


// Middleware to handle unhandled errors
app.use((err: any, req: any, res: any, next: any) => {
  logger.error('Unhandled error:', err.stack);
  console.error('Unhandled error:', err.stack);
  res
    .status(500)
    .send({ error: "Internal server error" });
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

// // Routes de connexion avec Auth0 et Google
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

// // Auth0 callback
app.get(
  '/callback',
  passport.authenticate('auth0', {
    failureRedirect: '/failure',
  }),
  (req, res) => {
    res.redirect('/');
  }
);

// // Google callback
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


// // Page d'accueil protégée
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

app.use("/admin", adminRouter)
app.use("/agent", agentRouter)
app.use("/fee", feeRouter)
app.use("/notification", notificationRouter)
app.use("/transaction", transactionRouter)
app.use("/transfer", transferRouter)
app.use("/user", userRouter)

app.get('/logout', (req, res) => {
  req.logout(() => {
    res.redirect('/');
  });
});

app.get('/hello', (req, res) => {
  res.send('Hello',);
});



// Middleware to handle 404 errors
app.use((req: any, res: any) => {
  logger.warn(`404 Not Found: ${req.method} ${req.url}`);
  console.warn(`404 Not Found: ${req.method} ${req.url}`);
  res
    .status(404)
    .send({ error: "Not Found" });
});


const server = https.createServer(credentials, app);

export default server;
