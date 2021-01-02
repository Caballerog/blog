import { Auctioneer } from "./auctioneer.interface";
import { Product } from "./product.model";

export interface Agent {
  subscribe(auctioneer: Auctioneer): void;
  unsubscribe(auctioneer: Auctioneer): void;
  notify(): void;
}
