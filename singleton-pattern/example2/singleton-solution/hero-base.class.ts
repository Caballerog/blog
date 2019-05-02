import { Hero } from './hero.interface';

export abstract class HeroBase {
  protected hero: Hero;
  protected _getUniqueIdentificator = Math.round(Math.random() * 10000);

  constructor(hero: Hero) {
    this.hero = hero;
  }
  public toString() {
    return `${this.hero.name} - ${this.hero.city} - ${
      this._getUniqueIdentificator
    }`;
  }
  public getUniqueIdentificator() {
    return this._getUniqueIdentificator;
  }
}
