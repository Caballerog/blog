import { ComponentBase } from './component-base';

export class ComponentB extends ComponentBase {
  public operation(): string {
    return `ComponentB(${super.operation()})`;
  }
}
