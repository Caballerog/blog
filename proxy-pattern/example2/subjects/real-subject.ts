import { Subject } from "./subject.interface";

export class RealSubject implements Subject {
    operation(): void {
        console.log('RealSubject: Handling operation.');
    }
}
