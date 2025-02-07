export interface MusicCommand {
    name: string;
    userId: string;
    voiceChannelId: string;
}

export interface BotResponse {
    success: boolean;
    message: string;
}