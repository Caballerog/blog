export interface Character {
  attack(): number;
  defend(): number;
  isAlive(): boolean;
  setLife(life: number): void;
  getLife(): number;
  getName(): string;
  toString(): string;
  receiveHit(attack: number): void;
}
