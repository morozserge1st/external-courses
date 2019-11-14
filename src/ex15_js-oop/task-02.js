function Device(name, power, isWork) {
  this.name = name;
  this.power = power;
  this.isWork = isWork;
}

function Room(name) {
  this.name = name;
  this.devices = Array.from(arguments).slice(1);
}

Room.prototype.getPower = function () {
  let result = 0;
  this.devices.forEach(device => {
    if (device.isWork) {
      result += device.power;
    }
  });
  return result;
}

Room.prototype.handleWork = function (name) {
  this.devices.forEach(device => {
    if(device.name === name) {
      device.isWork = !device.isWork;
    }
  });
}

Room.prototype.findDevice = function (name) {
  return this.devices.filter(device => device.name.toLowerCase().includes(name.toLowerCase()));
};

const blender = new Device('Blender', 0.7, false);
const stove = new Device('Stove', 1.3, true);
const oven = new Device('Oven', 2.2, true);
const dishwasher = new Device('Dishwasher', 1.8, false);

const kitchen = new Room('kitchen', blender, stove, oven, dishwasher);

console.log(kitchen.getPower());
console.log(kitchen.findDevice('oven'));
console.log(kitchen.handleWork('Oven'));
console.log(kitchen.getPower());
