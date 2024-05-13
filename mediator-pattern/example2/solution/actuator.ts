import { IoTDevice } from "./iot-device";
import { IoTMediator } from "./iot-mediator";

export class Actuator extends IoTDevice {
    constructor(id: string, mediator: IoTMediator) {
      super(id, mediator);
    }
  
    // Method to receive a control signal from another device
    receiveControlSignal(sender: IoTDevice, signal: string): void {
      console.log(`[${this.id}] Receiving control signal from ${sender.id}: ${signal}`);
      // Logic to process the received control signal
    }
  }