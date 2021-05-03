import { AbstractHandler } from "./abstract-handler";

export class HandlerB extends AbstractHandler {
  public handle(request: string): string {
    if (request === "optionB") {
      return `B: I'll do the operation -> ${request}.`;
    }
    return super.handle(request);
  }
}
