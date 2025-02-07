export function connectToVoiceChannel(voiceChannel) {
    return voiceChannel.join();
}

export function playAudio(connection, audioStream) {
    const dispatcher = connection.play(audioStream);
    dispatcher.on('finish', () => {
        connection.disconnect();
    });
    return dispatcher;
}

export function handleError(error) {
    console.error('An error occurred:', error);
}