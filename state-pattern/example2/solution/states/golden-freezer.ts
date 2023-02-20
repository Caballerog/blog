import { State } from "../state";
import { Transformation4 } from "./transformation4";

export class GoldenFreezer extends State {
    power = 212000;
    energy = 30;
    
    public attack() {
        const powerAttack = Math.round(this.power * (Math.random()/4));   
        const restoreEnergy = Math.round(Math.random() * 5);
        this.energy = this.energy + restoreEnergy;

        console.log('Freeza attack in the state Golden Freezer -->', powerAttack);
        console.log(`Freese restore energy ${restoreEnergy} and his energy is ${this.energy}\n`);
    }

    public defend(attack: number) {
        const attackFromEnemy = Math.round(attack * (Math.random()));
        this.energy = this.energy - attackFromEnemy;
        
        console.log('Freeza defend in Golden Freezer');
        console.log(`Freeza received an attack of ${attackFromEnemy} and his energy is ${this.energy}\n`);

        if(this.energy > 50){
            this.freeza.transitionTo(new Transformation4());
        }
    }
}