import { RealSubject, Subject } from "../subjects/";

export class LoggingProxy implements Subject {
    private realSubject: RealSubject;

    constructor(realSubject: RealSubject) {
        this.realSubject = realSubject;
    }

    operation(): void {
        this.logAccess();
        this.realSubject.operation();
    }

    private logAccess(): void {
        console.log('LoggingProxy: Logging access to RealSubject.');
    }
}

