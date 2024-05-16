import { IoTMediator } from "./iot-mediator";

export abstract class IoTDevice {
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
    receiveMessage(senderId: string, message: string): void {
      this.mediator.receiveMessage(this, senderId, message);
    }
  
    // Method to receive measurement data from another device
    receiveMeasurement(senderId: string, data: any): void {
      this.mediator.receiveMeasurement(this, senderId, data);
        // Logic to process the received measurement data
    }
  }
  