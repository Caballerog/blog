import { ConcretePrototype1 } from "./concrete.prototype1";
import { ConcretePrototype2 } from "./concrete-prototype2";

// Create instances of ConcretePrototype1 and ConcretePrototype2
const concretePrototype1 = new ConcretePrototype1();
const concretePrototype2 = new ConcretePrototype2();

// The operation method is called on the instances
concretePrototype1.operation();
concretePrototype2.operation();

// Cloning the instances
const clonedPrototype1 = concretePrototype1.clone();
const clonedPrototype2 = concretePrototype2.clone();

// Show the information of the cloned instances
clonedPrototype1.operation();
clonedPrototype2.operation();

