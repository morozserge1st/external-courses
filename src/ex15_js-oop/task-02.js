class Device {
  constructor(name, power, isActive) {
    this.name = name;
    this.power = power;
    this.isActive = isActive;
  }
}

class LightingDevice extends Device {
  constructor(name, power, isActive, lumens) {
    super(name, power, isActive);
    this.lumens = lumens;
  }
}

class CleaningDevice extends Device {
  constructor(name, power, isActive, noise) {
    super(name, power, isActive);
    this.noise = noise;
  }
}

class Room {
  constructor(name, devices) {
    this.name = name;
    this.devices = devices;
  }

  getPower() {
    let result = 0;
    this.devices.forEach(device => {
      if (device.isActive) {
        result += device.power;
      }
    });
    return result;
  }

  toggleEnabled(name) {
    this.devices.forEach(device => {
      if(device.name === name) {
        device.isActive = !device.isActive;
      }
    });
  }

  findDevice(name) {
    return this.devices.filter(device => (device.name.toLowerCase() === name.toLowerCase()));
  };
}

const blender = new Device('Blender', 0.7, false);
const spotlights = new LightingDevice('Spotlights', 0.3, true, 600);
const pendant = new LightingDevice('Pendant', 0.5, true, 700);
const steamCleaner = new CleaningDevice('Steam Cleaner', 1, false, 60);
const vacuumCleaner = new CleaningDevice('Vacuum Cleaner', 1.8, true, 75);

const kitchen = new Room('kitchen', [blender, spotlights, pendant, steamCleaner, vacuumCleaner]);

console.log(kitchen.getPower());
console.log(kitchen.findDevice('spotlights'));
console.log(kitchen.toggleEnabled('Vacuum Cleaner'));
console.log(kitchen.getPower());
