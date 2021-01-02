import { Agent } from "./agent.interface";
import { Auctioneer } from "./auctioneer.interface";
import { ConcreteAgent } from "./concrete-agent";

export class ConcreteAuctioneerA implements Auctioneer {
  name = "ConcreteAuctioneerA";
  MAX_LIMIT = 100;

  public update(agent: Agent): void {
    if (!(agent instanceof ConcreteAgent)) {
      throw new Error("ERROR: Agent is not a ConcreteAgent");
    }

    if (agent.product.auctionner === this) {
      return console.log(`${this.name}: I'm the owner... I'm waiting`);
    }

    console.log(`${this.name}: I am not the owner... I'm thinking`);
    const bid = Math.round(agent.product.price * 1.1);
    if (bid > this.MAX_LIMIT) {
      return console.log(`${this.name}: The bid is higher than my limit.`);
    }
    agent.bidUp(this, bid);
  }
}
