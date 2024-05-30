import { Position } from "./position";
import { Stats } from "./stats";
import { Team } from "./team";

export class Player {
    private name: string;
    private position: Position;
    private team: Team;
    private stats: Stats;

    constructor(name: string, position: Position, team: Team, stats: Stats) {
        this.name = name;
        this.position = position;
        this.team = team;
        this.stats = stats;
    }

    public displayInfo(): void {
        console.log(`Player - Name: ${this.name}, Position: ${this.position.name} (${this.position.role}), Team: ${this.team.name} (Coach: ${this.team.coach}), Stats: [Goals: ${this.stats.goals}, Assists: ${this.stats.assists}, Matches: ${this.stats.matches}]`);
    }
}