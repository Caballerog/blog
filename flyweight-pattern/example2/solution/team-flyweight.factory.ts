import { FlyweightFactory } from "./flyweight.factory";
import { Team } from "./domain/models";
import { TeamFlyweight } from "./team-flyweight";

export class TeamFlyweightFactory extends FlyweightFactory<Team> {

    protected flyweights: Map<string, TeamFlyweight> = new Map();

    public getFlyweight(team: Team): TeamFlyweight {
        const key = `team_${team.name}_coach_${team.coach}`;
        if(this.flyweights.has(key)) {
            console.log(`ConcreteFlyweightFactory: Reusing existing flyweight for Team = ${key}`);
            return this.flyweights.get(key)!;
        }

        this.flyweights.set(key, new TeamFlyweight(team));
        console.log(`PositionFlyweightFactory: Created new flyweight for Team = ${key}`);
        return this.flyweights.get(key)!;
    }
    
    
}