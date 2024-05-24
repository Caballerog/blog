import { FlyweightFactory } from "./flyweight-factory";
import { UnsharedConcreteFlyweight } from "./unshared-flyweight";

const factory = new FlyweightFactory();

// Create and use shared flyweights
const flyweight1 = factory.getFlyweight('A');
flyweight1.operation('First Call');

const flyweight2 = factory.getFlyweight('B');
flyweight2.operation('Second Call');

const flyweight3 = factory.getFlyweight('A');
flyweight3.operation('Third Call');

// Create and use unshared flyweights
const unsharedFlyweight1 = new UnsharedConcreteFlyweight('Unique State');
unsharedFlyweight1.operation('Fourth Call');

factory.listFlyweights();

