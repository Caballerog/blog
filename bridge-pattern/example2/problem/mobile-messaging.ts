// MobileMessaging.ts
export class MobileMessaging {
    sendMessageFromMobile(message: string): void {
        console.log("Sending message from a mobile device: " + message);
    }

    receiveMessageOnMobile(): string {
        return "Message received on a mobile device.";
    }
}


