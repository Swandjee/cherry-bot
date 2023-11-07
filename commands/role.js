const { ActionRowBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('role')
		.setDescription('Add yourself (or remove) a role.'),
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
					.setDescription('For roleplay enthusiast. Reminder: this is not an RP server, but discussion about it is welcome.')
					.setValue('rp'),
				new StringSelectMenuOptionBuilder()
					.setLabel('Voice Access')
					.setDescription('To gain voice access on the stream channel.')
					.setValue('voice'),
			);
		/* case 'nsfw1':
      return '388348197866700800';

    case 'nsfw2':
      return '523022272223510549';

    case 'art':
      return '237919832798920704';

    case 'sl':
      return '397674427531264001';

    case 'rp':
      return '237920775515013130';

    case 'voice':
      return '378161910253617162';*/
		const row = new ActionRowBuilder()
			.addComponents(select);

		await interaction.reply({
			content: 'Choose the role to add or remove.',
			components: [row],
			ephemeral: true,
		});
	},
};