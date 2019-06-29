import { Component } from './component.interface';

export class ComponentBase implements Component {
  public operation(): string {
    return 'ComponentBase';
  }
}
