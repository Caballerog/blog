import { Warrior } from '../interfaces/warrior.interface';

export class Namekian implements Warrior {
  public ATTACK_BASE = 50;
  public attack(): number {
    return Math.random() * 50 + this.ATTACK_BASE;
  }
}
