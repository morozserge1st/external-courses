function Sweet(name, weight) {
  this.name = name;
  this.weight = weight;
}

function Gift(sweets) {
  this.sweets = sweets;
}

Gift.prototype.getWeight = function () {
  return this.sweets.reduce((result, sweet) => result + sweet.weight,0);
};

Gift.prototype.sortSweet = function (callback) {
  return this.sweets.sort(callback);
};

Gift.prototype.findSweet = function (name) {
  return this.sweets.filter(sweet => (sweet.name.toLowerCase() === name.toLowerCase()));
};

const raffaello = new Sweet('Raffaello', 7);
const lion = new Sweet('Lion', 3);
const haribo = new Sweet('Haribo', 2);
const twix = new Sweet('Twix', 3);

const gift = new Gift([raffaello, lion, haribo, twix]);

console.log(gift);
console.log(gift.findSweet('Lion'));
console.log(gift.getWeight());
console.log(gift.sortSweet((a, b) => a.weight - b.weight));
