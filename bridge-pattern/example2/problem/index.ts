import { DesktopMessaging } from "./desktop-messaging";
import { MobileMessaging } from "./mobile-messaging";

class Client {
    static main(): void {
        // Utilizando la mensajería móvil
        const mobileMessaging = new MobileMessaging();
        mobileMessaging.sendMessageFromMobile("Hello from Mobile!");
        console.log(mobileMessaging.receiveMessageOnMobile());

        // Utilizando la mensajería de escritorio
        const desktopMessaging = new DesktopMessaging();
        desktopMessaging.sendMessageFromDesktop("Hello from Desktop!");
        console.log(desktopMessaging.receiveMessageOnDesktop());
    }
}

Client.main();