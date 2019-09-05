class Device {
  constructor (name, power, isWork) {
    this.name = name;
    this.power = power;
    this.isWork = isWork;
  }
}

class Room {
  constructor(name, devices) {
    this.name = name;
    this.devices = devices;
  }

  getPower() {
    let result = 0;
    this.devices.forEach((device) => {
      if(device.isWork) {
        result += device.power;
      }
    });
    return result;
  }
  
  handleWork(name) {
    this.devices.forEach((device) => {
      if(device.name === name) {
        device.isWork = !device.isWork;
      }
    });
    return this.devices;
  }
  
  findDevice(name) {
    return this.devices.filter((device) => device.name.includes(name));
  };
 
}

let device1 = new Device('Blender', 0.7, false);
let device2 = new Device('Stove', 1.3, true);
let device3 = new Device('Oven', 2.2, true);
let device4 = new Device('Dishwasher', 1.8, false);

let kitchen = new Room('kitchen', [device1, device2, device3, device4]);

console.log(kitchen.getPower());
console.log(kitchen.findDevice('Oven'));
console.log(kitchen.handleWork('Oven'));
console.log(kitchen.getPower());
