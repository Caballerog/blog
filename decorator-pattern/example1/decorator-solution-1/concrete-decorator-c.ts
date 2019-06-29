import { Decorator } from './decorator';

export class ConcreteDecoratorC extends Decorator {
  public operation(): string {
    return `ConcreteDecoratorC(${super.operation()})`;
  }
}
