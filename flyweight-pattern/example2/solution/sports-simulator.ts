import { IPosition, IStats, ITeam } from "./domain/interfaces";
import { Player, Stats } from "./domain/models";

import { PositionFlyweightFactory } from "./position-flyweight.factory";
import { TeamFlyweightFactory } from "./team-flyweight.factory";

export class SportsSimulator {
    private players: Player[] = [];
    private positionFactory: PositionFlyweightFactory = new PositionFlyweightFactory();
    private teamFactory: TeamFlyweightFactory = new TeamFlyweightFactory();

    public addPlayer(name: string, position: IPosition, team: ITeam, stats: IStats): void {
        const playerFlyweight = this.positionFactory.getFlyweight(position);
        const teamFlyweight = this.teamFactory.getFlyweight(team);
        const statsPlayer = new Stats(stats.goals, stats.assists, stats.passes);
        const player = new Player(name, playerFlyweight, teamFlyweight, statsPlayer);
        this.players.push(player);
    }

    public displayPlayers(): void {
        this.players.forEach(player => player.displayInfo());
    }
}