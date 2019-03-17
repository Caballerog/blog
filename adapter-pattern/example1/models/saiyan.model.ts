import { Warrior } from '../interfaces/warrior.interface';

export class Saiyan implements Warrior {
  public ATTACK_BASE = 100;
  public attack(): number {
    return Math.random() * 100 + this.ATTACK_BASE;
  }
}
