import { STATE } from "./state.enum";

export class Freeza {
   
    private power: number;
    private energy: number;
    private state: STATE;

    constructor(state: STATE) {
        this.transitionTo(state);
    }

    isAlive(): boolean {
        return this.energy > 0;
    }
    
    public transitionTo(state: STATE): void {
        console.log('-----------------------------')
        console.log(`Freeze: Transition to ${state}.`);
        console.log('-----------------------------')
        this.state = state;
        switch(state) {
            case STATE.TRANSFORMATION1:
                this.power = 530000;
                this.energy = 5;
            break;
            case STATE.TRANSFORMATION2: 
                this.power = 106000;
                this.energy = 10;
            break;
            case STATE.TRANSFORMATION3: 
                this.power = 212000;
                this.energy = 15;
            break;
            case STATE.TRANSFORMATION4:
                this.power = 106000;
                this.energy = 20;
            break;
            case STATE.GOLDEN_FREEZER:
                this.power = 212000;
                this.energy = 30;
            break;
        }
    }


    public attack(): void {
        let attackToEnemy, restoreEnergy;
        switch(this.state){
            case STATE.TRANSFORMATION1: 
                attackToEnemy = Math.round(this.power * (Math.random()/8));
                restoreEnergy = Math.round(Math.random());
                this.energy = this.energy + restoreEnergy;
                console.log('Freeza attack in the state form 1 -->', attackToEnemy);
                console.log(`Freese restore energy ${restoreEnergy} and his energy is ${this.energy}\n`);
                break;
            case STATE.TRANSFORMATION2: 
                attackToEnemy = Math.round(this.power * (Math.random()/7));   
                restoreEnergy = Math.round(Math.random() * 2);
                this.energy = this.energy + restoreEnergy;
        
                console.log('Freeza attack in the state form 2 -->', attackToEnemy);
                console.log(`Freese restore energy ${restoreEnergy} and his energy is ${this.energy}\n`);
                break;       
            case STATE.TRANSFORMATION3: 
                attackToEnemy = Math.round(this.power * (Math.random()/6));   
                restoreEnergy = Math.round(Math.random() * 3);
                this.energy = this.energy + restoreEnergy;
        
                console.log('Freeza attack in the state form 3 -->', attackToEnemy);
                console.log(`Freese restore energy ${restoreEnergy} and his energy is ${this.energy}\n`);
    
            break;
            case STATE.TRANSFORMATION4:
                attackToEnemy = Math.round(this.power * (Math.random()/5));   
                restoreEnergy = Math.round(Math.random() * 4);
                this.energy = this.energy + restoreEnergy;
        
                console.log('Freeza attack in the state form 4 -->', attackToEnemy);
                console.log(`Freese restore energy ${restoreEnergy} and his energy is ${this.energy}\n`);                
            break;
            case STATE.GOLDEN_FREEZER: 
                attackToEnemy = Math.round(this.power * (Math.random()/4));   
                restoreEnergy = Math.round(Math.random() * 5);
                this.energy = this.energy + restoreEnergy;

                console.log('Freeza attack in the state Golden Freezer -->', attackToEnemy);
                console.log(`Freese restore energy ${restoreEnergy} and his energy is ${this.energy}\n`);
            break; 
        }
    }
    
    public defend(attack: number): void {
        let attackFromEnemy;

        switch(this.state){
            case STATE.TRANSFORMATION1: 
                attackFromEnemy = Math.round(attack * (Math.random()));
                this.energy = this.energy - attackFromEnemy;

                console.log('Freeza defend in form 1');
                console.log(`Freeza received an attack of ${attackFromEnemy} and his energy is ${this.energy}\n`);
                
                if(this.energy < 2){
                    this.transitionTo(STATE.TRANSFORMATION2);
                }
            break;

            case STATE.TRANSFORMATION2: 
                attackFromEnemy = Math.round(attack * (Math.random()));
                this.energy = this.energy - attackFromEnemy;
                
                console.log('Freeza defend in form 2');
                console.log(`Freeza received an attack of ${attackFromEnemy} and his energy is ${this.energy}\n`);
        
                if(this.energy < 5){
                    this.transitionTo(STATE.TRANSFORMATION1);
                }
                if(this.energy > 20){
                    this.transitionTo(STATE.TRANSFORMATION3);
                }
            break;
            case STATE.TRANSFORMATION3: break;
            case STATE.TRANSFORMATION4: break;
            case STATE.GOLDEN_FREEZER: break;

        }
        
    }
}