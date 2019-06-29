import { Character } from './character.interface';
import { CharacterDecorator } from './character-decorator';

export class WhiteWalkerDecorator extends CharacterDecorator {
  protected power = Math.random();

  constructor(character: Character) {
    super(character);
  }
  setPower(power: number) {
    this.power = power;
  }
  private whiteWalkerModifier(): number {
    return Math.random() * this.power + this.power;
  }
  attack(): number {
    return this.whiteWalkerModifier() * super.attack();
  }
  defend(): number {
    return this.whiteWalkerModifier() * super.attack();
  }
}
