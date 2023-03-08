import { State } from "../state";
import { Transformation2 } from "./transformation2";

export class Transformation1 extends State {
    power = 530000;
    energy = 5;

    public attack(): void {
        const attackToEnemy = Math.round(this.power * (Math.random()/8));
        const restoreEnergy = Math.round(Math.random());
        this.energy = this.energy + restoreEnergy;
        console.log('Freeza attack in the state form 1 -->', attackToEnemy);
        console.log(`Freese restore energy ${restoreEnergy} and his energy is ${this.energy}\n`);

    }

    public defend(attack: number): void {
        const attackFromEnemy = Math.round(attack * (Math.random()/7));
        this.energy = this.energy - attackFromEnemy;

        console.log('Freeza defend in form 1');
        console.log(`Freeza received an attack of ${attackFromEnemy} and his energy is ${this.energy}\n`);
        
        if(this.energy < 2){
            this.freeza.transitionTo(new Transformation2());
        }
    }
}