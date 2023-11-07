const { SlashCommandBuilder, EmbedBuilder } = require('@discordjs/builders');
const checkIfOwner = require('../helpers/checkIfOwner');
const { devID } = require('../config.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('greet')
		.setDescription('Greet a user with a welcome message.')
		.addUserOption((option) =>
			option.setName('user').setDescription('User to greet.').setRequired(true),
		),
	async execute(interaction) {
		if (!checkIfOwner(interaction)) return interaction.reply({ content: 'You do not have the necessary permission to use this command.', ephemeral: true });
		const client = interaction.client;
		const dev = client.users.cache.get(devID);
		const myself = client.user;
		const user = interaction.options.getUser('user');
		const body = guildResponseHandle(myself, user, interaction.guild, dev);
		return interaction.reply({ ...body, ephemeral: true });

	},
};

const guildResponseHandle = (myself, _member, guild, dev) => {
	const embed = new EmbedBuilder()
		.setColor(0x149495)
		.setTitle('Rules')
		.setTimestamp(Date.now())
		.setAuthor({
			name: `${myself.username}`,
			iconURL: myself.displayAvatarURL(),
		})
		.setDescription('Make sure to get acquainted with these first !')
		.setThumbnail(`${guild.iconURL()}`)
		.addFields(
			{
				name: '1:',
				value:
      'Keep it civil. If you have gripes with someone, contact one of the mods.',
			},
			{
				name: '2:',
				value:
      'This server is +18 only. Any minors will be PERMANENTLY banned with no warning.',
			},
			{
				name: '3:',
				value:
      'Any content considered illegal or harmful will be deleted and may result in a ban.',
			},
			{
				name: '4:',
				value:
      'There are multiple NSFW tiers, containing various types of extreme content. If you\'re not sure what any of these contain, feel free to contact a moderator to inquire about it.',
			},
			{
				name: '5:',
				value: 'Have fun !',
			},
		)
		.setFooter({ text: `Developed by ${dev.username}`, iconURL: myself.displayAvatarURL() });
	const object = {
		content: `Hello <@${_member.id}> (${_member.username}), welcome to ${guild.name} !
Make yourself acquainted with the rules below, and use the \`/role\` command to assign yourself a role.`,
		embeds: [embed],
	};
	return object;
};