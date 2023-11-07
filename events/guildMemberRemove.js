const { Events } = require('discord.js');

module.exports = {
	name: Events.GuildMemberRemove,
	async execute(guildMember, client) {
		console.log(`Guild member is gone. Parameters: client: ${guildMember} , member: ${guildMember.user} guild=${guildMember.guild} ${client.user.tag}`);

		const channel = client.channels.cache.get(guildMember.guild.systemChannelId);
		const message = `${guildMember.user} (${guildMember.user.username}) has left.`;
		return await channel.send(message);
	},
};