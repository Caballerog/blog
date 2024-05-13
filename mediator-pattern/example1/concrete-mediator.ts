import { Colleague } from "./colleague";
import { Colleague1 } from "./colleague1";
import { Colleague2 } from "./colleague2";
import { Mediator } from "./mediator";

export class ConcreteMediator implements Mediator {
    private colleague1: Colleague1;
    private colleague2: Colleague2;

  
    constructor(colleague1: Colleague1, colleague2: Colleague2) {
      this.colleague1 = colleague1;
      this.colleague2 = colleague2;
    }
  
    notify(sender: Colleague, event: string): void {
        switch(sender){
            case this.colleague1: this.handleColleague1(event); break;
            case this.colleague2: this.handleColleague2(event); break;
            default: console.log("Unknown sender");
        }

}
    private handleColleague1(event){
        console.log("Event received by ConcreteMediator from Colleague1: ", event);
        console.log("implements colleague1 logic");
        console.log("-----------------");
    }

    private handleColleague2(event){
        console.log("Event received by ConcreteMediator from Colleague1: ", event);
        console.log("implements colleague1 logic");
        console.log("-----------------");
    }
  }