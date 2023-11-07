const { SlashCommandBuilder } = require('@discordjs/builders');
const checkIfOwner = require('../helpers/checkIfOwner');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('say')
		.setDescription('Send a message.')
		.addStringOption((option) =>
			option.setName('content').setDescription('Content of the message.').setRequired(true),
		),
	async execute(interaction) {
		if (!checkIfOwner(interaction)) return interaction.reply({ content: 'You do not have the necessary permission to use this command.', ephemeral: true });
		const message = interaction.options.getString('content');
		interaction.channel.send({ content: message });
		return interaction.reply({ content: '.', ephemeral: true });

	},
};