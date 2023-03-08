import { GoldenFreezer } from "./golden-freezer";
import { State } from "../state";
import { Transformation3 } from "./transformation3";

export class Transformation4 extends State {
    power = 406000;
    energy = 20;
    
    public attack() {
        const attackToEnemy = Math.round(this.power * (Math.random()/5));   
        const restoreEnergy = Math.round(Math.random() * 4);
        this.energy = this.energy + restoreEnergy;

        console.log('Freeza attack in the state form 4 -->', attackToEnemy);
        console.log(`Freese restore energy ${restoreEnergy} and his energy is ${this.energy}\n`);
    }

    public defend(attack: number) {
        const attackFromEnemy = Math.round(attack * (Math.random()/6));
        this.energy = this.energy - attackFromEnemy;
        
        console.log('Freeza defend in form 4');
        console.log(`Freeza received an attack of ${attackFromEnemy} and his energy is ${this.energy}\n`);

        if(this.energy < 5){
            this.freeza.transitionTo(new GoldenFreezer());
        }
        if(this.energy > 25){
            this.freeza.transitionTo(new Transformation3());

        }
    }
}