import { FightingPokemon } from './pokemon/fighting-pokemon.model';
import { PoisonPokemon } from './pokemon/poison-pokemon.model';
import { GroundPokemon } from './pokemon/ground-pokemon.model';
import { Saiyan } from './dragonball/models/saiyan.model';
import { Namekian } from './dragonball/models/namekian';
import { Human } from './dragonball/models/human.model';
import { SaiyanAdapter } from './dragonball/models/saiyan-adapter.model';
import { NamekianAdapter } from './dragonball/models/namekian-adapter.model';
import { HumanAdapter } from './dragonball/models/human-adapter.model';
import { PureRace } from './dragonball/interfaces/pure-race.interface';

// Client/Context - Dragon Ball
console.log('Dragon Ball...\n');
const gohan = new SaiyanAdapter(new Saiyan());
const vegeta = new SaiyanAdapter(new Saiyan());
const piccolo = new NamekianAdapter(new Namekian());
const krilin = new HumanAdapter(new Human());

const everybody = [gohan, vegeta, piccolo, krilin];

const genki = everybody.reduce(
  (power: number, pureRace: PureRace) => power + pureRace.genki(),
  0
);
console.log(`everybody attack: ${genki}`);

// Client/Context - Pokemon
console.log('\nPokemon...\n');
const passimian = new FightingPokemon({
  name: 'Passimian',
  attack: 10,
  power: 10,
  defense: 10
});
console.log(passimian.toString());
passimian.calculateDamage();

const poipole = new PoisonPokemon({
  name: 'Poipole',
  attack: 10,
  power: 10,
  defense: 10
});
console.log(poipole.toString());
poipole.calculateDamage();

const mudsdale = new GroundPokemon({
  name: 'Mudsdale',
  attack: 10,
  power: 10,
  defense: 10
});
console.log(mudsdale.toString());
mudsdale.calculateDamage();
