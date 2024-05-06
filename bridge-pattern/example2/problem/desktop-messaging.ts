// DesktopMessaging.ts
export class DesktopMessaging {
    sendMessageFromDesktop(message: string): void {
        console.log("Sending message from a desktop: " + message);
    }

    receiveMessageOnDesktop(): string {
        return "Message received on a desktop.";
    }
}