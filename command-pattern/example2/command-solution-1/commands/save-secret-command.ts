import { Command } from './command.class';
import { StoreService } from '../services/store.service';

export class SaveSecretCommand extends Command {
  public constructor(private storeService: StoreService) {
    super();
  }
  public execute({ message }: { message: string }): void {
    console.log('Execute -> Execute Command...');
    this.storeService.storeMessage(message);
    console.log();
  }
}
