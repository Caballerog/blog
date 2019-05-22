import { StockTrade } from '../command-solution-1/stock.trader.class';

// Invoker.
export class Agent {
  private stockTrade: StockTrade = new StockTrade();

  public constructor() {}

  placeOrder(orderType: string): void {
    if (orderType === 'buy') {
      this.stockTrade.buy();
    } else if (orderType === 'sell') {
      this.stockTrade.sell();
    } else {
      console.log('OPERATION NOT FOUND!');
    }
  }
}
