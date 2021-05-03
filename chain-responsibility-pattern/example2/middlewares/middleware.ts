import { Handler, User } from "../interfaces";

export abstract class Middleware implements Handler {
  private next: Handler;

  public setNextMiddleware(next: Handler): Handler {
    this.next = next;
    return next;
  }
  public abstract execute(user: User): boolean;

  protected checkNext(user: User): boolean {
    if (!this.next) {
      return true;
    }
    return this.next.execute(user);
  }
}
