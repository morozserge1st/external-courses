class Sweet {
  constructor (name, weight) {
    this.name = name;
    this.weight = weight; 
  }
}

class Gift {
  constructor(sweets) {
    this.sweets = sweets;
  }

  getWeight() {
    let result = 0;
    this.sweets.forEach((sweet) => {
      result += sweet.weight;
    });
    return result;
  };

  sort(par) {
    return this.sweets.sort(par);
  };

  findSweet(name) {
    return this.sweets.filter((sweet) => sweet.name.includes(name));
  };
}

let sweet1 = new Sweet('Lion', 0.15);
let sweet2 = new Sweet('Haribo', 0.1);
let sweet3 = new Sweet('M&ms', 1);
let sweet4 = new Sweet('Mars', 3);

let gift = new Gift([sweet1, sweet2, sweet3, sweet4]);

console.log(gift.sort((a, b) => a.weight - b.weight));
console.log(gift.findSweet('r'));
console.log(gift.findSweet('Lion'));
console.log(gift.getWeight());
