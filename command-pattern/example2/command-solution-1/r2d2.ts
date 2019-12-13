import { Command } from './commands/command.class';

export class R2D2 {
  private commands: Command[] = [];

  public constructor() {}

  excuteCommand(command: Command, commandArgs?: any): void {
    this.commands.push(command);
    command.execute(commandArgs);
  }

  listCommands(): string {
    return this.commands.reduce(
      (acc, curr) => acc + curr.toString() + '\n',
      ''
    );
  }
}
