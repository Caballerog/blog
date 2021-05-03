import { Middleware } from "./middleware";
import { Server } from "../server";
import { User } from "../interfaces";

export class UserExistsMiddleware extends Middleware {
  public constructor(private server: Server) {
    super();
  }

  public execute({ email, password }: User): boolean {
    if (!this.server.hasEmail(email)) {
      console.log("This email is not registered!");
      return false;
    }
    if (!this.server.isValidPassword(email, password)) {
      console.log("Wrong password!");
      return false;
    }
    return this.checkNext({ email, password });
  }
}
