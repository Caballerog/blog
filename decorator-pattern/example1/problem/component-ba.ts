import { ComponentBase } from './component-base';

export class ComponentBA extends ComponentBase {
  public operation(): string {
    return `ComponentBA(${super.operation()})`;
  }
}
