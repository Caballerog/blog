import { AbstractHandler } from "./abstract-handler";

export class HandlerA extends AbstractHandler {
  public handle(request: string): string {
    if (request === "optionA") {
      return `A: I'll do the operation -> ${request}.`;
    }
    return super.handle(request);
  }
}
