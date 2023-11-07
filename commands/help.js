const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');
const { devID } = require('../config.json');

module.exports = {
	data: new SlashCommandBuilder().setName('help').setDescription('Get information about available commands.'),
	async execute(interaction) {
		const dev = interaction.client.users.cache.get(devID);
		const myself = interaction.client.user;
		const embed = new EmbedBuilder()
			.setColor(0x149495)
			.setTitle('Help & Info')
			.setTimestamp(Date.now())
			.setAuthor({
				name: `${myself.username}`,
				iconURL: myself.displayAvatarURL(),
			})
			.setDescription('A description of publicly available commands, and role descriptions.')
			.setThumbnail(`${myself.displayAvatarURL()}`)
			.addFields(
				{
					name: 'Commands',
					value:
                          '`/role`: Assigns or removes a role. For more description on what roles do, read below.\n`/help`: Displays this infobox.\n`/flip`: Flip a coin.',
				},
				{
					name: 'Roles',
					value:
                          'Roles and their intended purposes are described below:',
				},
				{
					name: 'nsfw-level-1',
					value:
                          '<@&388348197866700800> This role is to access some of the kink channels.',
				},
				{
					name: 'nsfw-level-2',
					value:
                          '<@&523022272223510549> This role is to access all kink channels.',
				},
				{
					name: 'artist',
					value:
                          '<@&237919832798920704> This role for creators of any kind (modding, art, music, gamedev, ect).',
				},
				{
					name: 'secondlife',
					value: '<@&397674427531264001> This role is for SecondLife users.',
				},
				{
					name: 'roleplay',
					value:
                          '<@&237920775515013130> This role is for roleplay enthusiast. Reminder: this is not an RP server, but discussion about it is welcome.',
				},
				{
					name: 'voice-access',
					value:
                          '<@&378161910253617162> This role is to gain voice access on the stream channel. This will be revoked if you abuse it, such as talking over others or not respecting the chat in general.',
				},
			)
			.setFooter({ text: `Developed by ${dev.username}`, iconURL: myself.displayAvatarURL() });
		return await interaction.reply({
			content: ' ',
			embeds: [embed],
		});
	},
};