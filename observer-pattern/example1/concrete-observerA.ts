import { ConcreteSubject } from "./concrete-subject";
import { Observer } from "./observer.interface";
import { Subject } from "./subject.interface";

export class ConcreteObserverA implements Observer {
  public update(subject: Subject): void {
    if (subject instanceof ConcreteSubject && subject.state < 3) {
      console.log("ConcreteObserverA: Reacted to the event.");
    }
  }
}
