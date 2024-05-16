import { Actuator } from "./actuator";
import { IoTDevice } from "./iot-device";
import { IoTMediator } from "./iot-mediator";

export class ConcreteIoTMediator implements IoTMediator {
    private devices: Map<string, IoTDevice> = new Map();
  
    registerDevice(device: IoTDevice): void {
      this.devices.set(device.id, device);
    }

    private findOrError(id: string): IoTDevice {
      const device = this.devices.get(id);
      if (!device) {
        throw new Error(`Device ${id} not found.`);
      }
      return device;
    }
  
    sendMessage(sender: IoTDevice, receiverId: string, message: string): void {
      const receiver = this.findOrError(receiverId);

      console.log(`[${sender.id}] Sending message to ${receiverId}: ${message}`);
      receiver.receiveMessage(sender.id, message);   
    }
  
    sendMeasurement(sender: IoTDevice, receiverId: string, data: any): void {
      const receiver = this.findOrError(receiverId);
 
      console.log(`[${sender.id}] Sending measurement data to ${receiverId}: ${JSON.stringify(data)}`);
      // Logic to send the data to the receiver
      if (!(receiver instanceof Actuator)) {
        return console.log("Error: Measurement data can only be sent to an Actuator.");
      } 
      receiver.receiveMeasurement(sender.id, data);
    }

    receiveMessage(receiver: IoTDevice, senderId: string, message: string): void {
      const sender = this.findOrError(senderId);

      console.log(`[${receiver.id}] Message received from ${sender.id}: ${message}`);
      // Logic to process the received message
    }

    receiveMeasurement(receiver: IoTDevice, senderId: string, data: any): void {
      const sender = this.findOrError(senderId);
      console.log(`[${receiver.id}] Measurement received from ${sender.id}: ${JSON.stringify(data)}`);
      // Logic to process the received message
    }

    receiveControlSignal(receiver: IoTDevice, senderId: string, signal: string): void {
      const sender = this.findOrError(senderId);
  
      console.log(`[${receiver.id}] Receiving control signal from ${sender.id}: ${signal}`);
        // Logic to process the received control signal
      }

  }
  