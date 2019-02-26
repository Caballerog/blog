class Pokemon {
  constructor(_pokemon) {
    this.name = _pokemon.name || 'unknown';
    this.power = _pokemon.power || 1;
    this.attack = _pokemon.attack || 1;
    this.defense = _pokemon.defense || 1;
  }
  toString() {
    return `${this.name} -  power: ${this.power}; attack: ${
      this.attack
    }; defense: ${this.defense}`;
  }
}
class FightingPokemon extends Pokemon {
  constructor(_pokemon) {
    super(_pokemon);
  }
  calculateDamage() {
    const multipliers = (1 / 2) * this.power * Math.random();
    const impact = Math.floor((this.attack / this.defense) * multipliers) + 1;
    console.log('Pokemon damage is:', impact);
  }
}

class PoisonPokemon extends Pokemon {
  constructor(_pokemon) {
    super(_pokemon);
  }
  calculateDamage() {
    const multipliers = (1 / 2) * this.power * Math.random();
    const impact = Math.floor((this.attack - this.defense) * multipliers) + 1;
    console.log('Pokemon damage is:', impact);
  }
}

class GroundPokemon extends Pokemon {
  constructor(_pokemon) {
    super(_pokemon);
  }
  calculateDamage() {
    const multipliers = (1 / 2) * this.power * Math.random();
    const impact = Math.floor((this.attack + this.defense) * multipliers) + 1;
    console.log('Pokemon damage is:', impact);
  }
}

// Client/Context

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
