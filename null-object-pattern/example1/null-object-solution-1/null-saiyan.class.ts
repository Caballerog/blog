import { AbstractSaiyan } from './saiyan.class';

export class NullSaiyan extends AbstractSaiyan {
  public getName(): string {
    return 'Not Available in Saiyan Database';
  }
  toString(): string {
    return 'Not Available in Saiyan Database';
  }
}
