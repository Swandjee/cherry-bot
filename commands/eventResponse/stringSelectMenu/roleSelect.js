const _ = require('lodash');

module.exports = {
	data: { name: 'roleSelect' },
	async execute(interaction) {

		const roleTag = interaction.values[0];
		const roleId = returnRoleId(roleTag);
		const roleMention = `<@&${returnRoleId(roleTag)}>`;

		const roleToAddOrRemove = await interaction.guild.roles.fetch(roleId);

		const member = interaction.member;

		if (_.isNil(roleToAddOrRemove)) {
			await interaction.reply({
				content: 'Could not find the mentioned role.',
				ephemeral: true,
			});
			return;
		}

		const memberRole = member.roles.cache.get(roleId);

		if (!_.isNil(memberRole)) {
			member.roles.remove(roleToAddOrRemove);
			await replyToInteraction(interaction, 'Removed', roleMention);
		}
		else {
			member.roles.add(roleToAddOrRemove);
			await replyToInteraction(interaction, 'Added', roleMention);
		}
	},
};

const replyToInteraction = async (interaction, action, roleMention) => {
	if (interaction.replied || interaction.deferred) {
		await interaction.followUp({ content: `${action} role ${roleMention}`,
			ephemeral: true });
	}
	else {
		await interaction.reply({
			content: `${action} role ${roleMention}`,
			ephemeral: true,
		});
	}
};

const returnRoleId = (value) => {
	switch (value) {
	case 'nsfw1':
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
		return '378161910253617162';

	default:
		return null;
	}
};