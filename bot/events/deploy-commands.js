const { REST, Routes, Events } = require('discord.js');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

module.exports = (client) => {
    client.once(Events.ClientReady, async (c) => {
        const commands = [];
        const commandsPath = path.join(__dirname, '..', 'commands');
        const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

        for (const file of commandFiles) {
            try {
                const filePath = path.join(commandsPath, file);
                const command = require(filePath);
                
                if (command.data && command.data.name) {
                    commands.push(command.data.toJSON());
                }
            } catch (error) {
                console.error(`Failed to load command: ${file}`, error);
            }
        }

        const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);

        try {
            console.log('Started refreshing application (/) commands.');

            const data = await rest.put(
                Routes.applicationCommands(process.env.CLIENT_ID),
                { body: commands }
            );

            console.log(`Successfully reloaded ${data.length} application (/) commands.`);
        } catch (error) {
            console.error('Command deployment failed:', error);
        }
    });
};