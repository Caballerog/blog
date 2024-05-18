import { IoTDevice } from "./iot-device";
import { IoTMediator } from "./iot-mediator";

export class Actuator extends IoTDevice {
    constructor(id: string, mediator: IoTMediator) {
      super(id, mediator);
    }
  
    // Method to receive a control signal from another device
    receiveControlSignal(senderId: string, signal: string): void {
      this.mediator.receiveControlSignal(this, senderId, signal);
    }
}