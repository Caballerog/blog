import { MessageSender } from './message-sender';

export class DesktopSender implements MessageSender {
    sendMessage(message: string): void {
        console.log("Sending message from a desktop: " + message);
    }

    receiveMessage(): string {
        return "Message received on a desktop.";
    }
}