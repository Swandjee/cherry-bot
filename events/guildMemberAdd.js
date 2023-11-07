const { Events } = require('discord.js');
const { devID } = require('../config.json');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	name: Events.GuildMemberAdd,
	async execute(guildMember, client) {
		console.log(`Guild member has arrived. Parameters: client: ${guildMember} , member: ${guildMember.user}, guild= ${client.user.tag}`);

		const commandChannel_id = 574221264722329631;
		const channel = client.channels.cache.get(guildMember.guild.systemChannelId);
		const dev = client.users.cache.get(devID);

		const guildResponseHandle = (myself, _member, guild) => {
			const embed = new EmbedBuilder()
				.setColor(0x14949522)
				.setTitle('Rules')
				.setTimestamp(Date.now())
				.setAuthor({
					name: `${myself.username}`,
					iconUrl: `${myself.displayAvatarURL()}`,
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
				.setAuthor(myself.displayAvatarURL())
				.setFooter({ text: `Developed by ${dev.username}`, iconURL: myself.displayAvatarURL() });
			const object = {
				content: `Hello <@${_member.id}> (${_member.username}), welcome to ${guild.name} !
  Make yourself acquainted with the rules below, and use the \`/role\` command in the <#${commandChannel_id}> channel to assign yourself a role.`,
				embed: [embed],
			};
			return object;
		};

		const guildResponse = guildResponseHandle(
			client.user,
			guildMember.user,
			guildMember.guild,
		);

		return await channel.send(guildResponse);
	},
};