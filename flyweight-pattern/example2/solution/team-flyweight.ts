import { Flyweight } from "./flyweight";
import { Team } from "./domain";

// Concrete Flyweights
export class TeamFlyweight implements Flyweight {
    #team: Team; // Intrinsic State

    constructor(team: Team) {
        this.#team = team;
    }

    public display(extrinsicState: any): void {
        console.log(`Team: ${this.#team.name} (${this.#team.coach})`);
    }

    public team(): Team {
        return this.#team;
    }
}