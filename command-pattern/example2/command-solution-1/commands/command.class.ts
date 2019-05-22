export abstract class Command {
  protected uid = Math.floor(Math.random() * 100000);

  public toString(): string {
    return 'R2D2: Command UID:: ' + this.uid;
  }
  abstract execute(args): void;
}
