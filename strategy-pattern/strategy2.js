class StrategyManager {
  constructor() {
    this._strategies = [];
  }
  addStrategy(strategy) {
    this._strategies = [...this._strategies, strategy];
  }
  getStrategy(name) {
    return this._strategies.find(strategy => strategy._name === name);
  }
}
class Strategy {
  constructor(name, handler) {
    this._name = name;
    this._handler = handler;
  }
  doAction() {
    this._handler();
  }
}

// Client-Context
const strategyManager = new StrategyManager();
const strategy1 = new Strategy('strategy1', () => console.log('Strategy1'));
const strategy2 = new Strategy('strategy2', () => console.log('Strategy2'));

strategyManager.addStrategy(strategy1);
strategyManager.addStrategy(strategy2);

// Choose first strategy.
const strategyA = strategyManager.getStrategy('strategy1');
strategyA.doAction();

// Choose second strategy.
const strategyB = strategyManager.getStrategy('strategy2');
strategyB.doAction();

// Choose unsupported strategy.
const strategyC = strategyManager.getStrategy('strategy3');

try {
  strategyC.doAction();
} catch (err) {
  console.error('Caught Error');
  console.error(err);
}
