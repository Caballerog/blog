export abstract class Pokemon {
  name: string;
  power: number;
  attack: number;
  defense: number;
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
  calculateMultiplier() {
    //Step 1 - Common
    return (1 / 2) * this.power * Math.random();
  }
  abstract calculateImpact(multipliers: number);
  showDamage(damage) {
    // Step 3 - Common
    console.log('Pokemon damage is:', damage);
  }
  calculateDamage() {
    const multipliers = this.calculateMultiplier(); //Step 1;
    const damage = this.calculateImpact(multipliers); //Step 2;
    this.showDamage(damage); //Step 3;
  }
}
