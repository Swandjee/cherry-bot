const { SlashCommandBuilder } = require("@discordjs/builders");
const checkIfOwner = require("../helpers/checkIfOwner.js");
const { EmbedBuilder } = require("discord.js");

const HEADS_IMG =
  "https://cdn.glitch.global/5f34b972-df82-46ea-b197-b5f21ced910f/kyrieCoinToonHeads.gif?v=1697920061692";

const TAILS_IMG =
  "https://cdn.glitch.global/5f34b972-df82-46ea-b197-b5f21ced910f/kyrieCoinToonTails.gif?v=1697920041896";

module.exports = {
  data: new SlashCommandBuilder().setName("flip2").setDescription("Toss a coin"),
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

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}