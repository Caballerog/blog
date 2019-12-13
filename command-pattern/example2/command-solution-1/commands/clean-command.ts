import { Command } from './command.class';
import { R2D2Service } from '../services';

export class CleanCommand extends Command {
  public constructor(private r2d2Service: R2D2Service) {
    super();
  }
  public execute(): void {
    console.log('Execute -> Clean Command');
    this.r2d2Service.clean();
    console.log();
  }
}
