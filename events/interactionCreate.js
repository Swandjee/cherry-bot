const { Events } = require('discord.js');
const stringSelectPath = '../commands/eventResponse/stringSelectMenu/';
module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction) {
		ifStringSelectInteraction(interaction);

		ifChatInputInteraction(interaction);

	},
};

async function ifStringSelectInteraction(interaction) {
	if (interaction.isStringSelectMenu()) {
		const SelectMenu = require(`${stringSelectPath}${interaction.customId}.js`);
		try {
			await SelectMenu.execute(interaction);
		}
		catch (error) {
			console.error(error);
			if (interaction.replied || interaction.deferred) {
				await interaction.followUp({ content: 'There was an error while executing this SelectMenu response!', ephemeral: true });
			}
			else {
				await interaction.reply({ content: 'There was an error while executing this SelectMenu response!', ephemeral: true });
			}
		}
	}
}

async function ifChatInputInteraction(interaction) {
	if (!interaction.isChatInputCommand()) return;

	const command = interaction.client.commands.get(interaction.commandName);

	if (!command) {
		console.error(`No command matching ${interaction.commandName} was found.`);
		return;
	}

	try {
		await command.execute(interaction);
	}
	catch (error) {
		console.error(error);
		if (interaction.replied || interaction.deferred) {
			await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
		}
		else {
			await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}
	}
}