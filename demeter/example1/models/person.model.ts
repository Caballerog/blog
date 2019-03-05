import { IPerson } from '../interfaces/person.interface';
import { IHouse } from '../interfaces/house.interface';

export class Person implements IPerson {
  private name: string;
  private house: IHouse;

  public constructor(name: string, house: IHouse) {
    this.name = name;
    this.house = house;
  }
  /* Method's are not neccesary to respect Demeter's Law */
  public getName(): string {
    return this.name;
  }
  public getHouse(): IHouse {
    return this.house;
  }
  /**  */

  public getZipCode(): string {
    return this.house.getZipCode();
  }

  public isZipCode(zipCode: string): boolean {
    return this.house.getZipCode() === zipCode;
  }
}
