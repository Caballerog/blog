import { IoTDevice } from "./iot-device";

export interface IoTMediator {
    registerDevice(device: IoTDevice): void;
    sendMessage(sender: IoTDevice, receiverId: string, message: string): void;
    sendMeasurement(sender: IoTDevice, receiverId: string, data: any): void;
    receiveMessage(receiver: IoTDevice, senderId: string, message: string): void;
    receiveMeasurement(receiver: IoTDevice, senderId: string, data: any): void;
    receiveControlSignal(receiver: IoTDevice, senderId: string, signal: string): void;
}
  