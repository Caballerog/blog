import { DragonballFacade } from './dragonball/dragonball-facade';
import { PokemonFacade } from './pokemon/pokemon-facade';

// Client/Context - System 1
console.log('DragonBall...\n');
const dragonballFacade = new DragonballFacade();
const genki = dragonballFacade.genki();
console.log(`everybody attack: ${genki}`);

// Client/Context - System 2
console.log('\nPokemon...\n');
const pokemonFacade = new PokemonFacade();
pokemonFacade.calculateDamage('passimian');
pokemonFacade.calculateDamage('poipole');
pokemonFacade.calculateDamage('mudsdale');
