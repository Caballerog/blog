import { PureRace } from '../interfaces/pure-race.interface';
import { Saiyan } from './saiyan.model';

export class SaiyanAdapter implements PureRace {
  constructor(private saiyan: Saiyan) {}
  public genki(): number {
    return this.saiyan.myPowerPart1() + this.saiyan.myPowerPart2();
  }
}
