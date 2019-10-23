const Calculator = (function Calculator() {
  let result = 0;

  function add(num) {
    if (+num) {
      result += num;
    }
    return add;
  }

  function subtract(num) {
    if (+num) {
      result -= num;
    }
    return subtract;
  }

  function divide(num) {
    if (+num) {
      result /= num;
    }
    return divide;
  }

  function multiply(num) {
    if (+num) {
      result *= num;
    }
    return multiply;
  }

  function getResult() {
    return result;
  }

  function reset() {
    result = 0;
    return reset;
  }

  return {
    add,
    subtract,
    divide,
    multiply,
    getResult,
    reset
  }
}());

module.exports = Calculator;
