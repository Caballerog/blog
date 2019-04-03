import { FightingPokemon } from './fighting-pokemon.model';
import { PoisonPokemon } from './poison-pokemon.model';
import { GroundPokemon } from './ground-pokemon.model';

export class PokemonFacade {
  pokemonFactory = {
    passimian: new FightingPokemon({
      name: 'Passimian',
      attack: 10,
      power: 10,
      defense: 10
    }),
    poipole: new PoisonPokemon({
      name: 'Poipole',
      attack: 10,
      power: 10,
      defense: 10
    }),
    mudsdale: new GroundPokemon({
      name: 'Mudsdale',
      attack: 10,
      power: 10,
      defense: 10
    })
  };

  calculateDamage(typePokemon: string): number {
    return this.pokemonFactory[typePokemon].calculateDamage();
  }
}
