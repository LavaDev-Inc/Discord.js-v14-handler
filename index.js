const { Logger } = require("./Logger");

const logger = new Logger({
  logLevel: "DEBUG",
  logToFile: true,
  logFilePath: "./logs/debug.log",
});

logger.info("Application started");
logger.debug("Debug message");
logger.error("Error occurred");
logger.warn("Warning message");

const Discord = require("discord.js");

class DiscordBot {
  constructor() {
    this.client = new Discord.Client({
      intents: [],
    });

    this.client.on("ready", () => {
      logger.info(`Logged in as ${this.client.user.tag}!`);
    });

    this.client.login("YOUR_BOT_TOKEN_HERE");
  }
}

new DiscordBot();
