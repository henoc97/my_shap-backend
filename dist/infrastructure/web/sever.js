"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const https_1 = __importDefault(require("https"));
const path_1 = __importDefault(require("path"));
const body_parser_1 = __importDefault(require("body-parser"));
const fs_1 = __importDefault(require("fs"));
const helmet_1 = __importDefault(require("helmet"));
const dotenv_1 = __importDefault(require("dotenv"));
const admin_router_1 = __importDefault(require("../../presentation/routers/admin.router"));
const agent_router_1 = __importDefault(require("../../presentation/routers/agent.router"));
const fee_router_1 = __importDefault(require("../../presentation/routers/fee.router"));
const notification_router_1 = __importDefault(require("../../presentation/routers/notification.router"));
const transaction_router_1 = __importDefault(require("../../presentation/routers/transaction.router"));
const transfer_router_1 = __importDefault(require("../../presentation/routers/transfer.router"));
const user_router_1 = __importDefault(require("../../presentation/routers/user.router"));
dotenv_1.default.config();
// import { ROOT_URL } from './endpoint';
// import cspMiddleware from '../middlewares/http/csp';
// import { logger } from './logger/logRotation';
// Buid absolutes path
const privateKeyPath = path_1.default.resolve(__dirname, '../ssl/server.key');
const certificatePath = path_1.default.resolve(__dirname, '../ssl/server.crt');
// Load les certificats
const privateKey = fs_1.default.readFileSync(privateKeyPath, 'utf8');
const certificate = fs_1.default.readFileSync(certificatePath, 'utf8');
const credentials = { key: privateKey, cert: certificate };
// Create Express application and HTTP server
const app = (0, express_1.default)();
const server = https_1.default.createServer(credentials, app);
// // Import and configure WebSocket server
// const configureWebSocket = require('./websocketServer');
// configureWebSocket(server);
// Passport configuration
// passport.use(auth0Strategy);
// passport.use(googleStrategy);
// // Serialization / Deserialization of the user
// passport.serializeUser((user, done) => {
//   done(null, user);
// });
// passport.deserializeUser((user, done) => {
//   done(null, user as Express.User);
// });
// app.use(passport.initialize());
// app.use(passport.session());
// use CSP middleware
// app.use(cspMiddleware);
app.use(body_parser_1.default.json()); // Parse JSON request bodies
app.use(body_parser_1.default.urlencoded({ extended: true })); // Parse URL-encoded request bodies
// app.use(cookieParser());
app.use((0, helmet_1.default)({ contentSecurityPolicy: false })); // Disable default CSP directives from Helmet
// app.use(compression()); // Compress HTTP responses
// Create a write stream for logging
app.use((req, res, next) => {
    // logger.info(`${req.method} ${req.url}`);
    console.info(`${req.method} ${req.url}`);
    next();
});
// Middleware to handle unhandled errors
// app.use((err: any, req: any, res: any, next: any) => {
//   // logger.error('Unhandled error:', err.stack);
//   console.error('Unhandled error:', err.stack);
//   res
//     .status(500)
//     .sendFile(path.join(__dirname, '../frontend/error/error-page500.html'));
// });
// Middleware pour les sessions
// app.use(
//   session({
//     secret: 'YOUR_SECRET_KEY',
//     resave: false,
//     saveUninitialized: true,
//   })
// );
// app.use(passport.initialize());
// app.use(passport.session());
// // Routes de connexion avec Auth0 et Google
// app.get(
//   '/login',
//   passport.authenticate('auth0', {
//     scope: 'openid email profile',
//   })
// );
// app.get(
//   '/auth/google',
//   passport.authenticate('google', { scope: ['profile', 'email'] })
// );
// // Auth0 callback
// app.get(
//   '/callback',
//   passport.authenticate('auth0', {
//     failureRedirect: '/failure',
//   }),
//   (req, res) => {
//     res.redirect('/');
//   }
// );
// // Google callback
// app.get(
//   '/auth/google/callback',
//   passport.authenticate('google', { failureRedirect: '/failure' }),
//   (req, res) => {
//     res.redirect('/');
//   }
// );
// app.use(
//   session({
//     secret: process.env.SESSION_SECRET!,
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//       secure: process.env.NODE_ENV === 'production',  // Assure que les cookies sont envoyés uniquement via HTTPS en production
//       maxAge: 3600000,  // Session expire après 1 heure
//       sameSite: 'lax',  // Prévention contre les attaques CSRF
//     },
//   })
// );
// // Page d'accueil protégée
// app.get('/profile', (req, res) => {
//   if (req.isAuthenticated()) {
//     res.send(`Hello, ${(req.user as any).displayName}`);
//   } else {
//     res.redirect('/login');
//   }
// });
// app.get('/failure', (req, res) => {
//   res.send('Failed to authenticate');
// });
app.use("/admin", admin_router_1.default);
app.use("/agent", agent_router_1.default);
app.use("/fee", fee_router_1.default);
app.use("/notification", notification_router_1.default);
app.use("/transaction", transaction_router_1.default);
app.use("/transfer", transfer_router_1.default);
app.use("/user", user_router_1.default);
app.get('/logout', (req, res) => {
    req.logout(() => {
        res.redirect('/');
    });
});
app.get('/hello', (req, res) => {
    res.send('Hello');
});
// Middleware to handle 404 errors
// app.use((req: any, res: any) => {
//   // logger.warn(`404 Not Found: ${req.method} ${req.url}`);
//   console.warn(`404 Not Found: ${req.method} ${req.url}`);
//   res
//     .status(404)
//     .sendFile(path.join(__dirname, '../frontend/error/error-page404.html'));
// });
exports.default = server;
