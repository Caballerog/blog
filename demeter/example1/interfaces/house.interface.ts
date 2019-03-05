import { IAddress } from './address.interface';

export interface IHouse {
  getAddress(): IAddress;
  getColor(): string;
  getSize(): number;
  getZipCode(): string;
}
