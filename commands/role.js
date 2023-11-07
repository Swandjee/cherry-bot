const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('role')
		.setDescription('Add yourself (or remove) a role.')
		.addRoleOption((option) =>
			option.setName('role').setDescription('The role to add or remove.').setRequired(true),
		),
	async execute(interaction) {
		const role = interaction.options.getRole('role');
		return interaction.reply({ content: `You selected ${role}`, ephemeral: true });
	},
};