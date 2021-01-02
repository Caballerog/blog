import { ConcreteAgent } from "./concrete-agent";
import { ConcreteAuctioneerA } from "./concrete-auctioneerA";
import { ConcreteAuctioneerB } from "./concrete-auctioneerB";
import { ConcreteAuctioneerC } from "./concrete-auctioneerC";
import { ConcreteAuctioneerD } from "./concrete-auctioneerD";
import { Product } from "./product.model";

const concreteAgent = new ConcreteAgent();

const auctioneerA = new ConcreteAuctioneerA();
const auctioneerB = new ConcreteAuctioneerB();
const auctioneerC = new ConcreteAuctioneerC();
const auctioneerD = new ConcreteAuctioneerD();

concreteAgent.subscribe(auctioneerA);
concreteAgent.subscribe(auctioneerB);
concreteAgent.subscribe(auctioneerC);
concreteAgent.subscribe(auctioneerD);

const diamond = new Product({ name: "Diamond", price: 5 });
concreteAgent.product = diamond;

concreteAgent.bidUp(auctioneerA, 10);

console.log("--------- new Bid-----------");

concreteAgent.unsubscribe(auctioneerD);

const gem = new Product({ name: "Gem", price: 3 });
concreteAgent.product = gem;

concreteAgent.bidUp(auctioneerB, 5);

console.log(`The winner of the bid is 
             Product: ${diamond.name}
             Name: ${diamond.auctionner.name}
             Price: ${diamond.price}`);

console.log(`The winner of the bid is 
             Product: ${gem.name}
             Name: ${gem.auctionner.name}
             Price: ${gem.price}`);
