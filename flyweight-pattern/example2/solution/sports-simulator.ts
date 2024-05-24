import { Player, Position, Stats, Team } from "./domain/";

import { PositionFlyweightFactory } from "./position-flyweight.factory";
import { TeamFlyweightFactory } from "./team-flyweight.factory";

export class SportsSimulator {
    private players: Player[] = [];
    private positionFactory: PositionFlyweightFactory = new PositionFlyweightFactory();
    private teamFactory: TeamFlyweightFactory = new TeamFlyweightFactory();

    public addPlayer(name: string, position: Position, team: Team, stats: Stats): void {
        const playerFlyweight = this.positionFactory.getFlyweight(position);
        const teamFlyweight = this.teamFactory.getFlyweight(team);
        const player = new Player(name, playerFlyweight, teamFlyweight, stats);
        this.players.push(player);
    }

    public displayPlayers(): void {
        this.players.forEach(player => player.displayInfo());
    }
}