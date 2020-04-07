import { AbstractSaiyan } from './saiyan.class';
import { Saiyan } from './saiyan.interface';

export class RealSaiyan extends AbstractSaiyan {
  constructor({ name, power }: Saiyan) {
    super();
    this.name = name;
    this.power = power;
  }

  getName(): string {
    return this.name;
  }
  toString(): string {
    return `${this.name} - ${this.power}`;
  }
}
