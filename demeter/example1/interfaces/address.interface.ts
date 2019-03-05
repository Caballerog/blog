export interface IAddress {
  getZipCode(): string;
  getNumber(): string;
  getStreet(): string;
  getCity(): string;
  getState(): string;
  getCounty(): string;
}
