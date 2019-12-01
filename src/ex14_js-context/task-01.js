function Calculator() {
  this.result = 0;

  this.add = function (num) {
    if (+num) {
      this.result += +num;
    }
    return this;
  };

  this.subtract = function (num) {
    if (+num) {
      this.result -= +num;
    }
    return this;
  };

  this.divide = function (num) {
    if (+num && num !== 0) {
      this.result /= +num;
    }
    return this;
  };

  this.multiply = function (num) {
    if (+num) {
      this.result *= +num;
    }
    return this;
  };

  this.getResult = function () {
    return this.result;
  };

  this.reset = function () {
    this.result = 0;
    return this;
  };

  this.setState = function (num) {
    if (+num) {
      this.result = +num;
    }
    return this;
  };

  this.fetchData = function (callback) {
    const cb = callback.bind(this);

    setTimeout(function(){
      cb(500)
    }, 1000);
  };
}

const calculator = new Calculator();

module.exports = calculator;
