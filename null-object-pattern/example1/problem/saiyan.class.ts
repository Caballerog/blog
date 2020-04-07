import { ISaiyan } from './saiyan.interface';

export class Saiyan {
  protected name: string;
  protected power: number;

  constructor({ name, power }: ISaiyan) {
    this.name = name;
    this.power = power;
  }
  getName(): string {
    return this.name;
  }

  public toString(): string {
    return `${this.name} - ${this.power}`;
  }
}
