import { ConcreteSubject } from "./concrete-subject";
import { Observer } from "./observer.interface";
import { Subject } from "./subject.interface";

export class ConcreteObserverB implements Observer {
  public update(subject: Subject): void {
    if (
      subject instanceof ConcreteSubject &&
      (subject.state === 0 || subject.state >= 2)
    ) {
      console.log("ConcreteObserverB: Reacted to the event.");
    }
  }
}
