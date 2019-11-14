class Sweet {
  constructor (name, weight) {
    this.name = name;
    this.weight = weight; 
  }
}

class Gift {
  constructor() {
    this.sweets = Array.from(arguments);
  }

  getWeight() {
    let result = 0;
    this.sweets.forEach(sweet => {
      result += sweet.weight;
    });
    return result;
  };

  sortSweet(callback) {
    return this.sweets.sort(callback);
  };

  findSweet(name) {
    return this.sweets.filter(sweet => sweet.name.toLowerCase().includes(name.toLowerCase()));
  };
}

const raffaello = new Sweet('Raffaello', 7);
const lion = new Sweet('Lion', 3);
const haribo = new Sweet('Haribo', 3);
const twix = new Sweet('Twix', 2);

const gift = new Gift(raffaello, lion, haribo, twix);

console.log(gift.findSweet('r'));
console.log(gift.findSweet('Lion'));
console.log(gift.getWeight());
console.log(gift.sortSweet((a, b) => a.weight - b.weight));
