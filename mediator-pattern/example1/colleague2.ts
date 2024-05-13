import { Colleague } from "./colleague";
import { Mediator } from "./mediator";

export class Colleague2 implements Colleague {
    private mediator: Mediator;
  
    setMediator(mediator: Mediator): void {
      this.mediator = mediator;
    }
  
    action(): void {
      this.mediator.notify(this, "Event from Colleague2");
    }
  }