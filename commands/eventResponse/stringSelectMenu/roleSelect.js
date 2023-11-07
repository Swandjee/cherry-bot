module.exports = {
	data: { name: 'roleSelect' },
	async execute(interaction) {

		const roleTag = interaction.values[0];
		const roleId = returnRoleId(roleTag);
		const roleMention = `<@&${returnRoleId(roleTag)}>`;

		const member = interaction.member;

		console.log(member.roles.cache.get(roleId));

		if (interaction.replied || interaction.deferred) {
			await interaction.followUp({ content: `Added role ${roleMention}`,
				ephemeral: true });
		}
		else {
			await interaction.reply({
				content: `Added role ${roleMention}`,
				ephemeral: true,
			});
		}
	},
};

const returnRoleId = (value) => {
	switch (value) {
	case 'nsfw1':
		//return '388348197866700800';
		return '1171160567768162334';

	case 'nsfw2':
		return '523022272223510549';

	case 'art':
		return '237919832798920704';

	case 'sl':
		return '397674427531264001';

	case 'rp':
		return '237920775515013130';

	case 'voice':
		return '378161910253617162';

	default:
		return null;
	}
};