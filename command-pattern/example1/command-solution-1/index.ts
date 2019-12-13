import { Agent } from './agent.class';
import { BuyStockOrder } from './buy-stock-order';
import { SellStockOrder } from './sell-stock-order';
import { StockTrade } from './stock.trader.class';

const stock = new StockTrade();
const buyStock = new BuyStockOrder(stock);
const sellStock = new SellStockOrder(stock);
const agent = new Agent();

agent.placeOrder(buyStock); // Buy Shares
agent.placeOrder(sellStock); // Sell Shares

console.log(agent.listOrders());
