const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('badge')
        .setDescription('Verifies bot activity for Active Developer Badge'),
    async execute(interaction) {
        await interaction.reply('Command executed successfully! This interaction confirms bot activity for Discord\'s Active Developer Badge program.\nYou may now claim your badge after 24 hours at: https://discord.com/developers/active-developer\n\nPlease allow 24 hours for system processing before proceeding.');
    }
};