import { AdvancedMessaging } from "./advanced-messaging";
import { DesktopSender } from "./desktop-sender";
import { MobileSender } from "./mobile-sender";

class Client {
    static main(): void {
        // Use mobile sender
        const mobileMessaging = new AdvancedMessaging(new MobileSender());
        mobileMessaging.send("Hello from Mobile!");
        console.log(mobileMessaging.receive());

        // Use desktop sender
        const desktopMessaging = new AdvancedMessaging(new DesktopSender());
        desktopMessaging.send("Hello from Desktop!");
        console.log(desktopMessaging.receive());
    }
}

Client.main();