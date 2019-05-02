import { HeroBase } from './hero-base.class';

export class Spiderman extends HeroBase {
  private static instance: Spiderman;

  private constructor() {
    super({
      name: 'Peter Parker',
      city: 'New City'
    });
  }
  public static getHero(): Spiderman {
    if (!Spiderman.instance) {
      this.instance = new Spiderman();
    }
    return Spiderman.instance;
  }
}
