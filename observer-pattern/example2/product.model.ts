import { Auctioneer } from "./auctioneer.interface";

export class Product {
  public price;
  public name;
  public auctionner: Auctioneer = null;

  constructor(product) {
    this.price = product.price || 10;
    this.name = product.name || "Unknown";
  }
}
