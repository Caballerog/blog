import { Pokemon } from './pokemon.model';

export class PoisonPokemon extends Pokemon {
  constructor(_pokemon) {
    super(_pokemon);
  }
  calculateImpact(multipliers) {
    return Math.floor((this.attack - this.defense) * multipliers) + 1;
  }
}
