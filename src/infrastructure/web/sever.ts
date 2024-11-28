
import express from 'express';
import https from 'https';
import session from 'express-session';
import passport from 'passport';
import path from 'path';
import bodyParser from 'body-parser';
import fs from 'fs';
// import helmet from 'helmet';
import dotenv from 'dotenv';
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
import errorLoggingMiddleware from '../../application/helper/middlewares/error-log/error-logging-filter';
import { createMessage } from '../external-services/twilio/client';
import otpRouter from '../../presentation/routers/otp.router';

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



app.use("/otp", otpRouter)
app.use("/admin", adminRouter)
app.use("/agent", agentRouter)
app.use("/fee", feeRouter)
app.use("/notification", notificationRouter)
app.use("/transaction", transactionRouter)
app.use("/transfer", transferRouter)
app.use("/user", userRouter)

app.use(errorLoggingMiddleware)

// app.get('/logout', (req, res) => {
//   req.logout(() => {
//     res.redirect('/');
//   });
// });

app.get('/hello', (req, res) => {
  res.send('Hello',);
});

app.get('/test', (req, res) => {
  createMessage();
  res.status(200).send("c est bon")
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
