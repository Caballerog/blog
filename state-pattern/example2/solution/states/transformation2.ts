import { State } from "../state";
import { Transformation1 } from "./transformation1";
import { Transformation3 } from "./transformation3";

export class Transformation2 extends State {
    power = 106000;
    energy = 10;
    
    public attack(): void {
        const attackToEnemy = Math.round(this.power * (Math.random()/7));   
        const restoreEnergy = Math.round(Math.random() * 2);
        this.energy = this.energy + restoreEnergy;

        console.log('Freeza attack in the state form 2 -->', attackToEnemy);
        console.log(`Freese restore energy ${restoreEnergy} and his energy is ${this.energy}\n`);
    }

    public defend(attack: number) {
        const attackFromEnemy = Math.round(attack * (Math.random()/6));
        this.energy = this.energy - attackFromEnemy;
        
        console.log('Freeza defend in form 2');
        console.log(`Freeza received an attack of ${attackFromEnemy} and his energy is ${this.energy}\n`);

        if(this.energy < 5){
            this.freeza.transitionTo(new Transformation3());
        }
        if(this.energy > 20){
            this.freeza.transitionTo(new Transformation1());

        }
    }
}