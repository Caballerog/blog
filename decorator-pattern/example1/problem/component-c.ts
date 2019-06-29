import { ComponentBase } from './component-base';

export class ComponentC extends ComponentBase {
  public operation(): string {
    return `ComponentC(${super.operation()})`;
  }
}
