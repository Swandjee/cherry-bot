const fs = require("fs");

const { Client, Collection, GatewayIntentBits } = require("discord.js");
const client = new Client({
  intents: [GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.GuildPresences,
  GatewayIntentBits.MessageContent,
  GatewayIntentBits.GuildMembers],
});
const { SlashCommandBuilder } = require("@discordjs/builders");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v10");
const { clientIDTest, guildsTest } = require("./config.json");

client.commands = new Collection();
const eventFiles = fs
  .readdirSync("./events")
  .filter((file) => file.endsWith(".js"));
const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.data.name, command);
}

async function registerActions() {
  const _commands = [];

  for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    _commands.push(command.data.toJSON());
  }

  const rest = new REST({ version: "10" }).setToken(process.env.DEV_MARASCHINO_TOKEN);
  (async () => {
    try {
      console.log("Started refreshing application (/) commands.");
      await guildsTest.map(async (guild) => {
        await rest.put(Routes.applicationGuildCommands(clientIDTest, guild), {
          body: _commands,
        });
      });

      console.log("Successfully reloaded application (/) commands.");
    } catch (error) {
      console.error(error);
    }
  })();
}

for (const file of eventFiles) {
  const event = require(`./events/${file}`);
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args));
  } else {
    client.on(event.name, (...args) => event.execute(...args));
  }
}

registerActions().then(() => client.login(process.env.DEV_MARASCHINO_TOKEN));