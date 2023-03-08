import { State } from "./state";

export class Freeza {
   
    private state: State;

    constructor(state: State) {
        this.transitionTo(state);
    }

    isAlive(): boolean {
        return this.state.getEnergy() > 0;
    }
    
    public transitionTo(state: State): void {
        console.log('-----------------------------')
        console.log(`Freeze: Transition to ${(<any>state).constructor.name}.`);
        console.log('-----------------------------')
        this.state = state;
        this.state.setFreeza(this);
    }

    public attack(): void {
        this.state.attack();
    }
    public defend(value: number): void {
        this.state.defend(value);
    }
}