import { Colleague1 } from "./colleague1";
import { Colleague2 } from "./colleague2";
import { ConcreteMediator } from "./concrete-mediator";

const colleague1 = new Colleague1();
const colleague2 = new Colleague2();

const mediator = new ConcreteMediator(colleague1, colleague2);

colleague1.setMediator(mediator);
colleague2.setMediator(mediator);

colleague1.action();
colleague2.action();