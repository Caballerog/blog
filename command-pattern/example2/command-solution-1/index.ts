import { CleanCommand, MoveCommand, SaveSecretCommand } from './commands';
import { R2D2Service, StoreService } from './services';

import { R2D2 } from './r2d2';

const storeService = new StoreService();
const r2d2Service = new R2D2Service();

const saveSecretCommand = new SaveSecretCommand(storeService);
const cleanCommand = new CleanCommand(r2d2Service);
const moveCommand = new MoveCommand(r2d2Service);

const r2d2 = new R2D2();

r2d2.excuteCommand(saveSecretCommand, { message: 'SuperSecretMessage' });
r2d2.excuteCommand(cleanCommand);
r2d2.excuteCommand(moveCommand, { direction: 'Málaga, Paradise' });

console.log(r2d2.listCommands());
