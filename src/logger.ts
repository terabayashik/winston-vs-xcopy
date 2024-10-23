import winston, { format } from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

const transport: DailyRotateFile = new DailyRotateFile({
  filename: "%DATE%.log",
  zippedArchive: true,
  maxFiles: "90d",
  dirname: "./logs",
});

export const logger = winston.createLogger({
  level: "debug",
  format: format.combine(
    format.timestamp({ format: "YYYY-MM-DD HH:mm:ss.SSS" }),
    format.cli(),
    format.printf((info) => {
      const { level, message, timestamp } = info;
      return `${timestamp} [${level}] ${message}`;
    }),
  ),
  // transports: [new winston.transports.Console(), transport],
  transports: [transport],
});
