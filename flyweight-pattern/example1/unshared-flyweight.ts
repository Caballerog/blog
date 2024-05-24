import { Flyweight } from "./flyweight";

// Unshared Concrete Flyweight
export class UnsharedConcreteFlyweight implements Flyweight {
    private allState: string;

    constructor(allState: string) {
        this.allState = allState;
    }

    public operation(extrinsicState: any): void {
        console.log(`UnsharedConcreteFlyweight: All State = ${this.allState}, Extrinsic State = ${extrinsicState}`);
    }
}