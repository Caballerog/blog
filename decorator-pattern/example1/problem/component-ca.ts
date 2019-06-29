import { ComponentBase } from './component-base';

export class ComponentCA extends ComponentBase {
  public operation(): string {
    return `ComponentCA(${super.operation()})`;
  }
}
