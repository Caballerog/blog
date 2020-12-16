import { Hero } from "./hero.model";
import { HeroBuilder } from "./hero-builder";

export class HeroDirector {

	public createHero (heroBuilder: HeroBuilder): Hero {
		heroBuilder.setArmor();
		heroBuilder.setSkills();
        heroBuilder.setWeapon();
        return heroBuilder.build();
    }
    public createHeroBasic (heroBuilder: HeroBuilder): Hero{
        return heroBuilder.build();
    }
    public createHeroWithArmor(heroBuilder: HeroBuilder): Hero{
        heroBuilder.setArmor();
        return heroBuilder.build();
    }
}