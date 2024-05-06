export interface MessageSender {
    sendMessage(message: string): void;
    receiveMessage(): string;
}