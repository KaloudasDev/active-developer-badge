require('dotenv').config();
const { Client, GatewayIntentBits, Collection, Events } = require('discord.js');
const fs = require('fs');
const path = require('path');

const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});

client.commands = new Collection();

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    try {
        const filePath = path.join(commandsPath, file);
        const command = require(filePath);
        
        if (command.data && command.data.name && typeof command.execute === 'function') {
            client.commands.set(command.data.name, command);
        }
    } catch (error) {
        console.error(`Failed to load command: ${file}`, error);
    }
}

client.once(Events.ClientReady, (c) => {
    console.log(`Bot connected as ${c.user.tag}`);
});

client.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply({ content: 'Command execution failed', ephemeral: true });
    }
});

require('./events/deploy-commands')(client);

client.login(process.env.DISCORD_TOKEN);