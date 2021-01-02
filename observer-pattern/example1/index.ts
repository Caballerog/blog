import { ConcreteObserverA } from "./concrete-observerA";
import { ConcreteObserverB } from "./concrete-observerB";
import { ConcreteSubject } from "./concrete-subject";

const subject = new ConcreteSubject();

const observer1 = new ConcreteObserverA();
subject.attach(observer1);

const observer2 = new ConcreteObserverB();
subject.attach(observer2);

subject.operation();
subject.operation();

subject.detach(observer2);

subject.operation();
