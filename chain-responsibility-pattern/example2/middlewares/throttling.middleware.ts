import { Middleware } from "./middleware";
import { User } from "../interfaces";
import { WAIT_TIME } from "../app.constants";

export class ThrottlingMiddleware extends Middleware {
  private request: number = 0;
  private currentTime: number = new Date().getTime();
  private requestPerMinute: number;

  constructor(requestPerMinute: number) {
    super();
    this.requestPerMinute = requestPerMinute;
  }

  public execute(user: User): boolean {
    const now = new Date().getTime();
    const limitTime = this.currentTime + WAIT_TIME;

    if (now > limitTime) {
      this.request = 0;
      this.currentTime = now;
    }

    this.request++;

    if (this.request > this.requestPerMinute) {
      console.log("Request limit exceeded!");
      return false;
    }
    return this.checkNext(user);
  }
}
