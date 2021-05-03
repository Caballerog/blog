import { AbstractHandler } from "./abstract-handler";

export class HandlerC extends AbstractHandler {
  public handle(request: string): string {
    if (request === "optionC") {
      return `C: I'll do the operation -> ${request}.`;
    }
    return super.handle(request);
  }
}
