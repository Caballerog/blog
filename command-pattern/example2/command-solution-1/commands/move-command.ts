import { Command } from './command.class';
import { R2D2Service } from '../services';

export class MoveCommand extends Command {
  public constructor(private r2d2Service: R2D2Service) {
    super();
  }
  public execute({ direction }: { direction: string }): void {
    console.log('Execute -> Move Command');
    this.r2d2Service.move(direction);
    console.log();
  }
}
