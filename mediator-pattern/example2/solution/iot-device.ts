import { IoTMediator } from "./iot-mediator";

export class IoTDevice {
    constructor(public id: string, protected mediator: IoTMediator) {
      mediator.registerDevice(this);
    }
  
    // Method to send a message to another device
    sendMessage(receiverId: string, message: string): void {
      this.mediator.sendMessage(this, receiverId, message);
    }
  
    // Method to send measurement data to another device
    sendMeasurement(receiverId: string, data: any): void {
      this.mediator.sendMeasurement(this, receiverId, data);
    }
  
    // Method to receive a message from another device
    receiveMessage(sender: IoTDevice, message: string): void {
      console.log(`[${this.id}] Message received from ${sender.id}: ${message}`);
      // Logic to process the received message
    }
  
    // Method to receive measurement data from another device
    receiveMeasurement(sender: IoTDevice, data: any): void {
      console.log(`[${this.id}] Measurement data received from ${sender.id}: ${JSON.stringify(data)}`);
      // Logic to process the received measurement data
    }
  }
  