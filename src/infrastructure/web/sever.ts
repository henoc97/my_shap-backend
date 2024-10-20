
import express from 'express';
import https from 'https';
import path from 'path';
const cors = require('cors');
import bodyParser from 'body-parser';
import fs from 'fs';
import helmet from 'helmet';
import compression from 'compression';
import dotenv from 'dotenv';

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

// Configure EJS template engine
app.set('view engine', 'ejs');

// Define paths for views
const viewsPath = {
  owner: path.join(__dirname, '../frontend/views/owner'),
  tenant: path.join(__dirname, '../frontend/views/tenant'),
  admin: path.join(__dirname, '../frontend/views/admin'),
};

// use CSP middleware
app.use(cspMiddleware);

// Configure middlewares
app.use(
  cors({
    origin: `${ROOT_URL}`,
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);
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

// Middleware to handle 404 errors
app.use((req: any, res: any) => {
  logger.warn(`404 Not Found: ${req.method} ${req.url}`);
  res
    .status(404)
    .sendFile(path.join(__dirname, '../frontend/error/error-page404.html'));
});

export default app;
