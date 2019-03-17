import { Warrior } from '../interfaces/warrior.interface';
import { Android } from './android.model';

export class AndroidAdapter implements Warrior {
  constructor(private android: Android) {}
  public ATTACK_BASE = 50;
  public attack(): number {
    return this.android.kick() + this.android.punch() + this.ATTACK_BASE;
  }
}
