import { exec } from "node:child_process";
import { logger } from "./logger";

const line = "0123456789".repeat(1000);

// Add 100 lines to the log file
console.log("Adding 100 lines to the log file...");
logger.info("===== 1st log =====");
for (let i = 0; i < 100; i++) {
  logger.debug(line);
}
logger.info("===== End of 1st log =====");
console.log("Done adding 100 lines to the log file.");

// Copy logs to backup directory
const srcDir = "./logs";
const destDir = "./logs_backup";
console.log("Copying logs to backup directory...");
exec(`xcopy /s /y ${srcDir} ${destDir}`, () => {
  console.log("Done copying logs to backup directory.");
});

// Add 100 lines again to write logs while copying
console.log("Adding 100 more lines to the log file...");
logger.info("===== 2nd log =====");
for (let i = 0; i < 100; i++) {
  logger.debug(line);
}
logger.info("===== End of 2nd log =====");
console.log("Done adding 100 more lines to the log file.");
