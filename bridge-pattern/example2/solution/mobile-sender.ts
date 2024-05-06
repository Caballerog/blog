import { MessageSender } from './message-sender';

export class MobileSender implements MessageSender {
    sendMessage(message: string): void {
        console.log("Sending message from a mobile device: " + message);
    }

    receiveMessage(): string {
        return "Message received on a mobile device.";
    }
}