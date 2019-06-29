import { ComponentBase } from './component-base';

export class ComponentA extends ComponentBase {
  public operation(): string {
    return `ComponentA(${super.operation()})`;
  }
}
