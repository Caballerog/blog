import { IHouse } from '../interfaces/house.interface';
import { IAddress } from '../interfaces/address.interface';

export class House implements IHouse {
  private address: IAddress;
  private color: string;
  private size: number;

  public constructor(address: IAddress, color: string, size: number) {
    this.address = address;
    this.color = color;
    this.size = size;
  }
  public getAddress(): IAddress {
    return this.address;
  }

  public getColor(): string {
    return this.color;
  }

  public getSize(): number {
    return this.size;
  }

  public getZipCode(): string {
    return this.address.getZipCode();
  }
}
