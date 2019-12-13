import { Order } from './order.class';
import { StockTrade } from './stock.trader.class';

//ConcreteCommand Class.
export class SellStockOrder extends Order {
  private stockTrade: StockTrade;
  protected type = 'sell';
  public constructor(stockTrade: StockTrade) {
    super();
    this.stockTrade = stockTrade;
  }
  public execute() {
    this.stockTrade.sell();
  }
}
