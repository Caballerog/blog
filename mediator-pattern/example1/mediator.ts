import { Colleague } from "./colleague";

export interface Mediator {
    notify(sender: Colleague, event: string): void;
  }
  