import { Observer } from "./observer.interface";
import { Subject } from "./subject.interface";

export class ConcreteSubject implements Subject {
  public state: number;
  private observers: Observer[] = [];

  public attach(observer: Observer): void {
    const isAttached = this.observers.includes(observer);
    if (isAttached) {
      return console.log("Subject: Observer has been attached already");
    }

    console.log("Subject: Attached an observer.");
    this.observers.push(observer);
  }

  public detach(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex === -1) {
      return console.log("Subject: Nonexistent observer");
    }

    this.observers.splice(observerIndex, 1);
    console.log("Subject: Detached an observer");
  }

  public notify(): void {
    console.log("Subject: Notifying observers...");
    for (const observer of this.observers) {
      observer.update(this);
    }
  }

  public operation(): void {
    console.log("Subject: Business Logic.");
    this.state = Math.floor(Math.random() * (10 + 1));

    console.log(`Subject: The state has just changed to: ${this.state}`);
    this.notify();
  }
}
