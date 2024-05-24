import { ConcreteFlyweight } from "./concrete-flyweight";
import { Flyweight } from "./flyweight";

// Flyweight Factory
export class FlyweightFactory {
    private flyweights: Map<string, Flyweight> = new Map();

    public getFlyweight(key: string): Flyweight {
        if(this.flyweights.has(key)){
            console.log(`FlyweightFactory: Reusing existing flyweight for key = ${key}`);
            return this.flyweights.get(key)!;
        }
        
        this.flyweights.set(key,  new ConcreteFlyweight(key));
        console.log(`FlyweightFactory: Created new flyweight for key = ${key}`);
        return this.flyweights.get(key)!;
    }

    public listFlyweights(): void {
        console.log(`FlyweightFactory: I have ${this.flyweights.size} flyweights:`);
        for (const [key, _] of this.flyweights) {
            console.log(key);
        }
    }
}
