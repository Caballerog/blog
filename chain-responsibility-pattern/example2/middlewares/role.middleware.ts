import { Middleware } from "./middleware";
import { USERS } from "../app.constants";
import { User } from "../interfaces";

export class RoleMiddleware extends Middleware {
  public execute({ email, password }: User): boolean {
    if (email === USERS.ADMIN.email) {
      console.log("Hello, admin!");
      return true;
    }
    console.log("Hello, user!");
    return this.checkNext({ email, password });
  }
}
