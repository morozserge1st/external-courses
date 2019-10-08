var Calculator = {
  result: 0,
  add: function add(num) {
    if (Number.isFinite(num)){
      Calculator.result += num;
    }
    return add;
  },
  subtract: function subtract(num) {
    if (Number.isFinite(num)){
      Calculator.result -= num;
    }
    return subtract;
  },
  divide: function divide(num) {
    if (Number.isFinite(num)){
      Calculator.result /= num;
    }
    return divide;
  },
  multiply: function multiply(num) {
    if (Number.isFinite(num)){
      Calculator.result *= num;
    }
    return multiply;
  },
  getResult: function getResult() {
    return this.result;
  },
  reset: function reset() {
    this.result = 0;
    return reset;
  },
}

module.exports = Calculator;
