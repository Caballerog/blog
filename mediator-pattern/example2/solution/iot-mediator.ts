import { IoTDevice } from "./iot-device";

export interface IoTMediator {
    sendMessage(sender: IoTDevice, receiverId: string, message: string): void;
    sendMeasurement(sender: IoTDevice, receiverId: string, data: any): void;
  }
  