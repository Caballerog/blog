import { IHouse } from './house.interface';

export interface IPerson {
  getName(): String;
  getHouse(): IHouse;
  getZipCode(): String;
}
