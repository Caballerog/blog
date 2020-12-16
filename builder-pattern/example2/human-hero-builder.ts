import { Hero } from "./hero.model";
import { HeroBuilder } from "./hero-builder";

export class HumanHeroBuilder extends HeroBuilder {
   
    constructor() {
        super();
		this.reset();
    }
    public reset() {
        this.hero = new Hero();
		this.hero.race = "Human";
    }
    
	public setArmor():void {
		this.hero.armor = "Human armor";
    }
    
    public setWeapon(): void {
        this.hero.weapon = 'Human weapon';
    }
    public setSkills(): void {
       this.hero.skills = ['Human skill1', 'Human skill2'];
    }
    public build(): Hero {
        const hero = this.hero;
        this.reset();
       return hero;
    }
}