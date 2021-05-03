import { Middleware } from "./middlewares";
import { User } from "./interfaces";

export class Server {
  private users: Map<string, User> = new Map<string, User>();
  private middleware: Middleware;

  public setMiddleware(middleware: Middleware): void {
    this.middleware = middleware;
  }

  public logIn(email: string, password: string): boolean {
    if (this.middleware.execute({ email, password })) {
      console.log("Authorization have been successful!");

      return true;
    }
    return false;
  }

  public register(email: string, password: string): void {
    const user: User = {
      email,
      password,
    };
    this.users.set(email, user);
  }

  public hasEmail(email: string): boolean {
    return this.users.has(email);
  }

  public isValidPassword(email: string, password: string): boolean {
    const user = this.users.get(email);
    return user.password === password;
  }
}
