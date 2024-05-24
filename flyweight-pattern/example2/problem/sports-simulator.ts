import { Player, Position, Stats, Team } from "./domain";

export class SportsSimulator {
    private players: Player[] = [];

    public addPlayer(name: string, position: Position, team: Team, stats: Stats): void {
        const player = new Player(name, position, team, stats);
        this.players.push(player);
    }

    public displayPlayers(): void {
        this.players.forEach(player => player.displayInfo());
    }
}
