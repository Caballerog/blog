// Base class for all IoT devices
abstract class IoTDevice {
    constructor(public id: string) {}
  
    // Method to send a message to another device
    sendMessage(receiver: IoTDevice, message: string): void {
      console.log(`[${this.id}] Sending message to ${receiver.id}: ${message}`);
      // Logic to send the message to the receiver
      receiver.receiveMessage(this, message);
    }
  
    // Method to receive a message from another device
    receiveMessage(sender: IoTDevice, message: string): void {
      console.log(`[${this.id}] Message received from ${sender.id}: ${message}`);
      // Logic to process the received message
    }
  }
  
  // Class to represent a sensor in the system
  class Sensor extends IoTDevice {
    constructor(id: string) {
      super(id);
    }
  
    // Method to send measurement data to another device
    sendMeasurement(receiver: IoTDevice, data: any): void {
      console.log(`[${this.id}] Sending measurement data to ${receiver.id}: ${JSON.stringify(data)}`);
      // Logic to send the data to the receiver
      if (!(receiver instanceof Actuator)) {
        return console.log("Error: Measurement data can only be sent to an Actuator.");
      } 
      receiver.receiveMeasurement(this, data);
    }
  }
  
  // Class to represent an actuator in the system
  class Actuator extends IoTDevice {
    constructor(id: string) {
      super(id);
    }
  
    // Method to receive measurement data from a sensor
    receiveMeasurement(sender: IoTDevice, data: any): void {
      console.log(`[${this.id}] Measurement data received from ${sender.id}: ${JSON.stringify(data)}`);
      // Logic to process the received measurement data
    }
  
    // Method to receive a control signal from another device
    receiveControlSignal(sender: IoTDevice, signal: string): void {
      console.log(`[${this.id}] Receiving control signal from ${sender.id}: ${signal}`);
      // Logic to process the received control signal
    }
  }
  
  // Create IoT devices
  const sensor1 = new Sensor("Sensor1");
  const sensor2 = new Sensor("Sensor2");
  const actuator1 = new Actuator("Actuator1");
  
  // Example interaction between devices
  sensor1.sendMessage(sensor2, "How are you?");
  sensor2.sendMeasurement(actuator1, { temperature: 25, humidity: 60 });
  actuator1.receiveControlSignal(sensor2, "Turn off");
  