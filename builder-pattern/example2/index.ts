import { HeroDirector } from "./hero-director";
import { HumanHeroBuilder } from "./human-hero-builder";
import { OrcHeroBuilder } from "./orc-hero-builder";

const humanBuilder = new HumanHeroBuilder();
const orcBuilder = new OrcHeroBuilder();
const heroDirector = new HeroDirector();

const humanHero = heroDirector.createHero(humanBuilder);
const humanHeroWithArmor = heroDirector.createHeroWithArmor(humanBuilder);
const humanHeroBasic = heroDirector.createHeroBasic(humanBuilder);

console.log(humanHero.toString());
console.log(humanHeroWithArmor.toString());
console.log(humanHeroBasic.toString());

const orcHero = heroDirector.createHero(orcBuilder);
const orcHeroWithArmor = heroDirector.createHeroWithArmor(orcBuilder);
const orcHeroBasic = heroDirector.createHeroBasic(orcBuilder);

console.log(orcHero.toString());
console.log(orcHeroWithArmor.toString());
console.log(orcHeroBasic.toString());
