"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SOCKET_URL = exports.ROOT_URL = void 0;
// Load environment variables
require('dotenv').config();
// Define configuration based on environment variables
const IP = process.env.IP || 'localhost';
const PORT = process.env.PORT || 8443;
// Construct the root URL
const ROOT_URL = `https://${IP}:${PORT}`;
exports.ROOT_URL = ROOT_URL;
const SOCKET_URL = `wss://${IP}:${PORT}`;
exports.SOCKET_URL = SOCKET_URL;
