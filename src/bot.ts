import { Client, GatewayIntentBits } from 'discord.js';
import { playMusic } from './commands/music';

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

client.once('ready', () => {
    console.log(`Logged in as ${client.user?.tag}`);
});

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) return;

    const { commandName, options } = interaction;

    if (commandName === 'musica') {
        const musicName = options.getString('name');
        await playMusic(interaction, musicName);
    }
});

client.login('YOUR_BOT_TOKEN');