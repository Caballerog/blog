import { Hero } from "./hero.model";
import { HeroBuilder } from "./hero-builder";

export class OrcHeroBuilder extends HeroBuilder {
   
    constructor() {
        super();
		this.reset();
    }
    public reset() {
        this.hero = new Hero();
		this.hero.race = "Orc";
    }
    
	public setArmor():void {
		this.hero.armor = "Orc armor";
    }
    
    public setWeapon(): void {
        this.hero.weapon = 'Orc weapon';
    }
    public setSkills(): void {
       this.hero.skills = ['Orc skill1', 'Orc skill2'];
    }
    public build(): Hero {
        const hero = this.hero;
        this.reset();
       return hero;
    }
}