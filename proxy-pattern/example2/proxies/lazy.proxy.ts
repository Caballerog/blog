import { RealSubject, Subject } from "../subjects/";

export class LazyProxy implements Subject {
    private realSubject: RealSubject | null = null;

    operation(): void {
        if (this.realSubject === null) {
            this.realSubject = new RealSubject();
        }
        this.realSubject.operation();
    }
}
