import { Actuator } from "./actuator";
import { ConcreteIoTMediator } from "./concrete-iot-mediator";
import { Sensor } from "./sensor";
// Create the Mediator
  const mediator = new ConcreteIoTMediator();
  
  // Create IoT devices
  const sensor1 = new Sensor("Sensor1", mediator);
  const sensor2 = new Sensor("Sensor2", mediator);
  const actuator1 = new Actuator("Actuator1", mediator);
  
  // Example interaction between devices
  sensor1.sendMessage("Sensor2", "How are you?");
  sensor2.sendMeasurement("Actuator1", { temperature: 25, humidity: 60 });
  actuator1.receiveControlSignal(sensor2, "Turn off");
  