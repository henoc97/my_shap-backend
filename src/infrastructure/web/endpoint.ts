// Load environment variables
require('dotenv').config();

// Define configuration based on environment variables
const IP = process.env.IP || 'localhost';
const PORT = process.env.PORT || 8443;

// Construct the root URL
const ROOT_URL = `https://${IP}:${PORT}`;
const SOCKET_URL = `wss://${IP}:${PORT}`;

export { ROOT_URL, SOCKET_URL }