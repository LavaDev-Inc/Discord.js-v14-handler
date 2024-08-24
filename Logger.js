class Logger {
  constructor(options = {}) {
    this.options = options;
    this.logLevel = options.logLevel || "INFO";
    this.logToFile = options.logToFile || false;
    this.logFilePath = options.logFilePath || "./logs/app.log";
  }

  log(level, message) {
    if (this.logLevel === "DEBUG" || level === this.logLevel) {
      const timestamp = new Date().toISOString();
      const logMessage = `[${timestamp}] [${level}] ${message}`;
      console.log(logMessage);
      if (this.logToFile) {
        this.appendLogToFile(logMessage);
      }
    }
  }

  appendLogToFile(message) {
    const fs = require("fs");
    fs.appendFile(this.logFilePath, message + "\n", (err) => {
      if (err) {
        console.error(`Error writing to log file: ${err}`);
      }
    });
  }

  info(message) {
    this.log("INFO", message);
  }

  debug(message) {
    this.log("DEBUG", message);
  }

  error(message) {
    this.log("ERROR", message);
  }

  warn(message) {
    this.log("WARN", message);
  }
}

module.exports = { Logger };
