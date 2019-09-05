function Gift(sweets) {
  this.sweets = sweets;
}

Gift.prototype.getWeight = function (sweets) {
  let result = 0;
  this.sweets.forEach((sweet) => {
    result += sweet.weight;
  });
  return result;
};

Gift.prototype.sort = function (par) {
  return this.sweets.sort(par);
};

Gift.prototype.findSweet = function (name) {
  return this.sweets.filter((sweet) => sweet.name.includes(name));
};

let sweet1 = new Sweet('Lion', 0.15);
let sweet2 = new Sweet('Haribo', 0.1);
let sweet3 = new Sweet('M&ms', 1);
let sweet4 = new Sweet('Mars', 3);

let gift = new Gift([sweet1, sweet2, sweet3, sweet4]);

console.log(gift.sort((a, b) => a.weight - b.weight));
console.log(gift.findSweet('r'));
console.log(gift.findSweet('Lion'));
console.log(gift.getWeight());
