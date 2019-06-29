import { Character } from './character.interface';
import { WhiteWalkerDecorator } from './white-walker-decorator';

export class LordDecorator extends WhiteWalkerDecorator {
  constructor(character: Character) {
    super(character);
    character.setLife(1000);
    this.power = 3;
  }
}
