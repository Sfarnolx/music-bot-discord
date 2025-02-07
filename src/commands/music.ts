import { CommandInteraction } from 'discord.js';
import { getVoiceConnection, joinVoiceChannel } from '@discordjs/voice';
import { playAudio } from '../utils';

export const musicCommand = async (interaction: CommandInteraction) => {
    const musicName = interaction.options.getString('name');

    if (!musicName) {
        return interaction.reply('Please provide a music name.');
    }

    const member = interaction.member;
    if (!member || !('voice' in member) || !member.voice.channel) {
        return interaction.reply('You need to be in a voice channel to play music.');
    }

    const voiceChannel = member.voice.channel;
    const connection = joinVoiceChannel({
        channelId: voiceChannel.id,
        guildId: interaction.guildId,
        adapterCreator: voiceChannel.guild.voiceAdapterCreator,
    });

    connection.on('error', (error) => {
        console.error('Connection error:', error);
        interaction.followUp('There was an error connecting to the voice channel.');
    });

    await interaction.reply(`Now playing: ${musicName}`);
    playAudio(connection, musicName);
};