const { SlashCommandBuilder } = require("@discordjs/builders");
const checkIfOwner = require("../helpers/checkIfOwner.js");
const { EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("say").setDescription("Make me say something!"),
  async execute(interaction) {
    var result = getRandomInt(2);
    var stringifiedResult = result == 0 ? "Heads" : "Tails";
    const embed = new EmbedBuilder()
      .setColor(0x0099ff)
      .setTitle(stringifiedResult)
      .setImage(result == 0 ? HEADS_IMG : TAILS_IMG)
      .setTimestamp(Date.now());
    console.log(`TEST: ${embed} (${result} , ${HEADS_IMG} ${TAILS_IMG} ${stringifiedResult})`);
    return await interaction.reply({
      content: " ",
      embeds: [embed],
    });
  },
};