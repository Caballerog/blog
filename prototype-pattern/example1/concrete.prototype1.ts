import { Prototype } from "./prototype";

export class ConcretePrototype1 implements Prototype {
    operation() {
        console.log("Operation from ConcretePrototype1");
    }

    clone(): Prototype {
        return new ConcretePrototype1();
    }
}
