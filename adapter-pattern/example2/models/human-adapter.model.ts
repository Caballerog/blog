import { PureRace } from '../interfaces/pure-race.interface';
import { Human } from './human.model';

export class HumanAdapter implements PureRace {
  constructor(private human: Human) {}

  public genki(): number {
    return this.human.sharedPower();
  }
}
