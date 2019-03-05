import { IAddress } from '../interfaces/address.interface';

export class Address implements IAddress {
  private zipCode: string;
  private number: string;
  private street: string;
  private city: string;
  private state: string;
  private country: string;

  public constructor(
    zipCode: string,
    number: string,
    street: string,
    city: string,
    state: string,
    country: string
  ) {
    this.zipCode = zipCode;
    this.number = number;
    this.street = street;
    this.city = city;
    this.state = state;
    this.country = country;
  }

  public getZipCode(): string {
    return this.zipCode;
  }

  public getNumber(): string {
    return this.number;
  }

  public getStreet(): string {
    return this.street;
  }

  public getCity(): string {
    return this.city;
  }

  public getState(): string {
    return this.state;
  }

  public getCounty(): string {
    return this.country;
  }
}
