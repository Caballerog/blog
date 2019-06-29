import { Component } from './component.interface';

export class ConcreteComponent implements Component {
  public operation(): string {
    return 'ConcreteComponent';
  }
}
