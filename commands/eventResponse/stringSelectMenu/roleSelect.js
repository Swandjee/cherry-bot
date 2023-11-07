module.exports = {
	data: { name: 'roleSelect' },
	async execute(interaction) {

		const status = interaction.values[0];

		if (interaction.replied || interaction.deferred) {
			await interaction.followUp({ content: `Added role ${status}`,
				ephemeral: true });
		}
		else {
			await interaction.reply({
				content: `Added role ${status}`,
				ephemeral: true,
			});
		}
	},
};