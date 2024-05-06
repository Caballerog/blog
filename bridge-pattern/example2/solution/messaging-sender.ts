import { MessageSender } from './message-sender';

export abstract class MessagingService {
    protected sender: MessageSender;

    constructor(sender: MessageSender) {
        this.sender = sender;
    }

    abstract send(message: string): void;
    abstract receive(): string;
}