import { IoTDevice } from "./iot-device";
import { IoTMediator } from "./iot-mediator";

export class Sensor extends IoTDevice {
    constructor(id: string, mediator: IoTMediator) {
      super(id, mediator);
    }
}