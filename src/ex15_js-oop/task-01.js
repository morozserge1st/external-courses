function Sweet(name, weight) {
  this.name = name;
  this.weight = weight;
}

function Gift() {
  this.sweets = Array.from(arguments);
}

Gift.prototype.getWeight = function () {
  let result = 0;
  this.sweets.forEach(sweet => {
    result += sweet.weight;
  });
  return result;
};

Gift.prototype.sortSweet = function (callback) {
  return this.sweets.sort(callback);
};

Gift.prototype.findSweet = function (name) {
  return this.sweets.filter(sweet => sweet.name.toLowerCase().includes(name.toLowerCase()));
};

const raffaello = new Sweet('Raffaello', 7);
const lion = new Sweet('Lion', 3);
const haribo = new Sweet('Haribo', 3);
const twix = new Sweet('Twix', 2);

const gift = new Gift(raffaello, lion, haribo, twix);

console.log(gift.findSweet('r'));
console.log(gift.findSweet('Lion'));
console.log(gift.getWeight());
console.log(gift.sortSweet((a, b) => a.weight - b.weight));
