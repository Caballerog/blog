import { Prototype } from "./prototype";

export class ConcretePrototype2 implements Prototype {
    operation() {
        console.log("Operation from ConcretePrototype2");
    }

    clone(): Prototype {
        return new ConcretePrototype2();
    }
}
