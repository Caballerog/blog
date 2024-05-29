import { IPosition, IStats, ITeam } from "./domain/interfaces";
import { Player, Position, Stats, Team } from "./domain/models";

export class SportsSimulator {
    private players: Player[] = [];

    public addPlayer(name: string, position: IPosition, team: ITeam, stats: IStats): void {
        const positionPlayer = new Position(position.name, position.role);
        const teamPlayer = new Team(team.name, team.coach);
        const statsPlayer = new Stats(stats.goals, stats.assists, stats.passes);

        const player = new Player(name, positionPlayer, teamPlayer, statsPlayer);
        this.players.push(player);
    }

    public displayPlayers(): void {
        this.players.forEach(player => player.displayInfo());
    }
}
