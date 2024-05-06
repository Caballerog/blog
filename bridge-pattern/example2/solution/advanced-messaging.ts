import { MessagingService } from './messaging-sender';

export class AdvancedMessaging extends MessagingService {
    send(message: string): void {
        this.sender.sendMessage(message);
    }

    receive(): string {
        return this.sender.receiveMessage();
    }
}