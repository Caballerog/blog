import { ComponentBase } from './component-base';

export class ComponentCBA extends ComponentBase {
  public operation(): string {
    return `ComponentCBA(${super.operation()})`;
  }
}
