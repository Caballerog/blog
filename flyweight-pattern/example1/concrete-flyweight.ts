import { Flyweight } from "./flyweight";

export class ConcreteFlyweight implements Flyweight {
    private intrinsicState: string;

    constructor(intrinsicState: string) {
        this.intrinsicState = intrinsicState;
    }

    public operation(extrinsicState: any): void {
        console.log(`ConcreteFlyweight: Intrinsic State = ${this.intrinsicState}, Extrinsic State = ${extrinsicState}`);
    }
}