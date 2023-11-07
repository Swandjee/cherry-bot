function isOwner(interaction) {
	const memberID = interaction.member.id;
	const ownerID = '103558535157157888';
	return memberID === ownerID;
}

module.exports = isOwner;