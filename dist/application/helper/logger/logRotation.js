"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = __importDefault(require("winston"));
const winston_daily_rotate_file_1 = __importDefault(require("winston-daily-rotate-file"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
// Directory for storing log files
const logDirectory = path_1.default.resolve(__dirname, 'logs');
// Create the log directory if it does not exist
if (!fs_1.default.existsSync(logDirectory)) {
    fs_1.default.mkdirSync(logDirectory);
}
/**
 * Transport for winston to handle log file rotation daily.
 * @type {DailyRotateFile}
 */
const transport = new winston_daily_rotate_file_1.default({
    filename: path_1.default.join(logDirectory, 'application-%DATE%.log'),
    datePattern: 'YYYY-MM-DD', // Date pattern for the log files
    zippedArchive: true, // Compresses old log files to save space
    maxSize: '20m', // Maximum size of each log file before rotation (20 megabytes)
    maxFiles: '14d', // Number of days to keep log files before deletion (14 days)
});
/**
 * Winston logger instance.
 * @type {winston.Logger}
 */
const logger = winston_1.default.createLogger({
    level: 'info', // Minimum log level to be recorded
    format: winston_1.default.format.combine(winston_1.default.format.timestamp(), // Adds a timestamp to each log entry
    winston_1.default.format.printf(({ timestamp, level, message }) => {
        return `${timestamp} ${level}: ${message}`; // Custom format for log messages
    })),
    transports: [
        transport, // Daily rotating log files transport
        new winston_1.default.transports.Console(), // Console transport for immediate logging output
    ],
});
exports.default = logger;
