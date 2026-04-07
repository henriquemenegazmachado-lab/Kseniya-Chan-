const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once("ready", () => {
  console.log(`✅ Logged in as ${client.user.tag}`);
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  if (message.content === "!ping") {
    message.reply("🏓 Pong!");
  }

  if (message.content === "!hello") {
    message.reply("👋 Hello!");
  }

  if (message.content === "!help") {
    message.reply("Commands: !ping, !hello, !help");
  }

  if (message.content === "!random") {
    const num = Math.floor(Math.random() * 100);
    message.reply(`🎲 Random number: ${num}`);
  }
});

client.login(process.env.DISCORD_TOKEN);
