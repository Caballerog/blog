import { Agent } from "./agent.interface";
import { Auctioneer } from "./auctioneer.interface";
import { ConcreteAgent } from "./concrete-agent";

export class ConcreteAuctioneerC implements Auctioneer {
  name = "ConcreteAuctioneerC";
  MAX_LIMIT = 500;

  public update(agent: Agent): void {
    if (!(agent instanceof ConcreteAgent)) {
      throw new Error("ERROR: Agent is not a ConcreteAgent");
    }

    if (agent.product.auctionner === this) {
      return console.log(`${this.name}: I'm the owner... I'm waiting`);
    }

    console.log(`${this.name}: I am not the owner... I'm thinking`);
    const isBid = Math.random() < 0.2;
    if (!isBid) {
      return console.log(`${this.name}: I give up!`);
    }
    const bid = Math.round(agent.product.price * 1.3);
    if (bid > this.MAX_LIMIT) {
      return console.log(`${this.name}: The bid is higher than my limit.`);
    }
    agent.bidUp(this, bid);
  }
}
