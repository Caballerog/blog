import { Flyweight } from "./flyweight";

// Flyweight Factory
export abstract class FlyweightFactory<T> {
    protected flyweights: Map<string, Flyweight> = new Map();
    
    public abstract getFlyweight(key: T): Flyweight;

    public listFlyweights(): void {
        console.log(`FlyweightFactory: I have ${this.flyweights.size} flyweights:`);
        for (const [key, _] of this.flyweights) {
            console.log(key);
        }
    }
}