const { SlashCommandBuilder } = require("@discordjs/builders");
const checkIfOwner = require("../helpers/checkIfOwner.js");
const { EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("say")
    .setDescription("Send a message.")
    .addStringOption((option) =>
      option.setName("content").setDescription("Content of the message.").setRequired(true)
    ),
  async execute(interaction) {
    const message = interaction.options.getString("content");
    //console.log({message});
   //interaction
    interaction.channel.send({content: message});
    return interaction.reply({content: " ", ephemeral: true});
    
  }
}