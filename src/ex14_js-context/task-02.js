function Hangman(word) {
  this.word = word;
  this.errors = 6;
  this.wrongSymbols = [];
  this.result = [];

  for (let i = 0; i < this.word.length; i++) {
    this.result.push('_');
  }

  this.guess = function (symbol) {
    if (this.word.includes(symbol)) {
      for (let i = 0; i < this.word.length; i++) {
        if (this.word[i] === symbol) {
          this.result[i] = symbol;
        }
      }
      this.message = this.result.join('');

      if (!this.result.includes('_')) {
        this.message += ' | You won!';
      }
    } else {
      this.errors -= 1;
      this.wrongSymbols.push(symbol);
      this.message = `wrong letter, errors left ${this.errors} | ${this.wrongSymbols.join(',')}`;
    }
    console.log(this.message);
    return this;
  };

  this.getGuessedString = function () {
    console.log(this.result.join(''));
    return this;
  };

  this.getErrorsLeft = function () {
    console.log(this.errors);
    return this;
  };

  this.getWrongSymbols = function () {
    console.log(this.wrongSymbols);
    return this;
  };

  this.getStatus = function () {
    console.log(`${this.result.join('')} | error left ${this.errors}`);
    return this;
  };

  this.startAgain = function (newWord) {
    this.word = newWord;
    this.errors = 6;
    this.wrongSymbols = [];
    this.result = [];
    this.message = '';

    for (let i = 0; i < this.word.length; i++) {
      this.result.push('_');
    }
    return this;
  };
  return this;
}

module.exports = Hangman();