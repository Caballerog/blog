import { Character } from './character.interface';

export class SimpleCharacter implements Character {
  name: string;
  life: number;

  constructor(name: string) {
    this.name = name;
    this.life = 100;
  }
  attack(): number {
    return 1;
  }
  defend(): number {
    return 1;
  }
  receiveHit(attack: number): void {
    const damage = attack * Math.random() - this.defend() * Math.random();
    if (damage <= 0) {
      return;
    }
    this.life = this.life < damage ? 0 : this.life - damage;
  }
  isAlive(): boolean {
    return this.life > 0;
  }
  getLife(): number {
    return this.life;
  }
  getName(): string {
    return this.name;
  }
  setLife(life: number) {
    this.life = life;
  }
  toString(): string {
    return 'Simple Character. Name: ' + this.name;
  }
}
