import { RealSubject, Subject } from "../subjects/";

export class AccessProxy implements Subject {
    private realSubject: RealSubject;
    private userRole: string;

    constructor(realSubject: RealSubject, userRole: string) {
        this.realSubject = realSubject;
        this.userRole = userRole;
    }

    operation(): void {
        if (!this.checkAccess()) {
            return console.log('AccessProxy: Access denied.'); 
        }
        this.realSubject.operation();
    }

    private checkAccess(): boolean {
        console.log(`AccessProxy: Checking access for role ${this.userRole}.`);
        return this.userRole === 'admin';
    }
}
