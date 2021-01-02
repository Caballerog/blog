import { Agent } from "./agent.interface";

export interface Auctioneer {
  name: string;
  MAX_LIMIT: number;
  update(agent: Agent): void;
}
