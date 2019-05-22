import { Order } from './order.class';

// Invoker.
export class Agent {
  private orders: Order[] = [];

  public constructor() {}

  placeOrder(order: Order) {
    this.orders.push(order);
    order.execute();
  }

  listOrders(): string {
    return this.orders.reduce((acc, curr) => acc + curr.toString() + '\n', '');
  }
}
