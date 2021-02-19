import { Auctioneer } from "./auctioneer.interface";

export interface Agent {
  subscribe(auctioneer: Auctioneer): void;
  unsubscribe(auctioneer: Auctioneer): void;
  notify(): void;
}
