import { Character } from './character.interface';

export class CharacterDecorator implements Character {
  protected character: Character;

  constructor(character: Character) {
    this.character = character;
  }
  attack(): number {
    return this.character.attack();
  }
  defend(): number {
    return this.character.defend();
  }
  isAlive(): boolean {
    return this.character.isAlive();
  }
  setLife(life: number): void {
    this.character.setLife(life);
  }
  getLife(): number {
    return this.character.getLife();
  }
  getName(): string {
    return this.character.getName();
  }
  receiveHit(attack: number) {
    this.character.receiveHit(attack);
  }
  toString(): string {
    return `${this.character.getName()} - ${this.character.getLife()}`;
  }
}
