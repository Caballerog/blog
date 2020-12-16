import { Hero } from "./hero.model";

export abstract class HeroBuilder {
	protected hero: Hero;
	
	public abstract setArmor(): void;
    public abstract setWeapon(): void;
    public abstract setSkills(): void;

	public abstract build(): Hero;
}