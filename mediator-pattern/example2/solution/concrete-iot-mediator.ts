import { IoTDevice } from "./iot-device";
import { IoTMediator } from "./iot-mediator";

export class ConcreteIoTMediator implements IoTMediator {
    private devices: Map<string, IoTDevice> = new Map();
  
    registerDevice(device: IoTDevice): void {
      this.devices.set(device.id, device);
    }
  
    sendMessage(sender: IoTDevice, receiverId: string, message: string): void {
      const receiver = this.devices.get(receiverId);
      if (receiver) {
        console.log(`[${sender.id}] Sending message to ${receiverId}: ${message}`);
        receiver.receiveMessage(sender, message);
      } else {
        console.log(`[${sender.id}] Error: Receiver ${receiverId} not found.`);
      }
    }
  
    sendMeasurement(sender: IoTDevice, receiverId: string, data: any): void {
      const receiver = this.devices.get(receiverId);
      if (receiver) {
        console.log(`[${sender.id}] Sending measurement data to ${receiverId}: ${data}`);
        receiver.receiveMeasurement(sender, data);
      } else {
        console.log(`[${sender.id}] Error: Receiver ${receiverId} not found.`);
      }
    }
  }
  