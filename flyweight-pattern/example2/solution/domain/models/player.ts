import { PositionFlyweight } from "../../position-flyweight";
import { Stats } from "./stats";
import { TeamFlyweight } from "../../team-flyweight";

export class Player {
    private name: string;
    private positionFlyweight: PositionFlyweight;
    private teamFlyweight: TeamFlyweight;
    private stats: Stats;

    constructor(name: string, positionFlyweight: PositionFlyweight, teamFlyweight: TeamFlyweight, stats: Stats) {
        this.name = name;
        this.positionFlyweight = positionFlyweight;
        this.teamFlyweight = teamFlyweight;

        this.stats = stats;
    }

    public displayInfo(): void {
        console.log(`Player - Name: ${this.name}, Stats: [Goals: ${this.stats.goals}, Assists: ${this.stats.assists}, Matches: ${this.stats.matches}]`);
        this.positionFlyweight.display(this.stats);
    }
}