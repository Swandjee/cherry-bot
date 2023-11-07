const { ActionRowBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('role')
		.setDescription('Add (or remove) yourself a role.'),
	async execute(interaction) {

		const select = new StringSelectMenuBuilder()
			.setCustomId('roleSelect')
			.setPlaceholder('Select a role.')
			.addOptions(
				new StringSelectMenuOptionBuilder()
					.setLabel('NSFW Lv.1')
					.setDescription('Access some of the kink channels.')
					.setValue('nsfw1'),
				new StringSelectMenuOptionBuilder()
					.setLabel('NSFW Lv.2')
					.setDescription('Access all kink channels.')
					.setValue('nsfw2'),
				new StringSelectMenuOptionBuilder()
					.setLabel('Artist')
					.setDescription('For creators of any kind (modding, art, music, gamedev, ect).')
					.setValue('art'),
				new StringSelectMenuOptionBuilder()
					.setLabel('RP')
					.setDescription('For roleplay enthusiast. Reminder: this is not an RP server.')
					.setValue('rp'),
				new StringSelectMenuOptionBuilder()
					.setLabel('Voice Access')
					.setDescription('To gain voice access on the stream channel.')
					.setValue('voice'),
			);

		const row = new ActionRowBuilder()
			.addComponents(select);

		await interaction.reply({
			content: 'Choose the role to add or remove.',
			components: [row],
			ephemeral: true,
		});
	},
};