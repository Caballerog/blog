import { User } from "./user.interface";

export interface Handler {
  setNextMiddleware(handler: Handler): void;

  execute(user: User): boolean;
}
