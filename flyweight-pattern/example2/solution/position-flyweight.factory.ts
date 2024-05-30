import { FlyweightFactory } from "./flyweight.factory";
import { Position } from "./models";
import { PositionFlyweight } from "./position-flyweight";

export class PositionFlyweightFactory extends FlyweightFactory<Position> {

    protected flyweights: Map<string, PositionFlyweight> = new Map();

    public getFlyweight(position: Position): PositionFlyweight {
        const key = `${position.name}_${position.role}`;
        if(this.flyweights.has(key)) {
            console.log(`ConcreteFlyweightFactory: Reusing existing flyweight for Position = ${key}`);
            return this.flyweights.get(key)!;
        }

        this.flyweights.set(key, new PositionFlyweight(position));
        console.log(`PositionFlyweightFactory: Created new flyweight for Position = ${key}`);
        return this.flyweights.get(key)!;
    }
    
    
}