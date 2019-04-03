import { PureRace } from '../interfaces/pure-race.interface';
import { Namekian } from './namekian.model';

export class NamekianAdapter implements PureRace {
  constructor(private namekian: Namekian) {}
  public genki(): number {
    return this.namekian.getPower();
  }
}
