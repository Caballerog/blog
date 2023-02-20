import { ConcreteStateA } from "./concrete-state-A";
import { Context } from "./context";

const context = new Context(new ConcreteStateA()); // Initial State
context.request1();
context.request2();
