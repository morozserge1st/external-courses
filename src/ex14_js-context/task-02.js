function Hangman(word) {
  this.word = word.toLowerCase();
  this.errors = 6;
  this.wrongSymbols = [];
  this.result = [];

  for (let i = 0; i < this.word.length; i++) {
    this.result.push('_');
  }

  this.guess = function (letter) {
    const symbol = letter.toLowerCase();

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
    return this.result.join('');
  };

  this.getErrorsLeft = function () {
    return this.errors;
  };

  this.getWrongSymbols = function () {
    return this.wrongSymbols;
  };

  this.getStatus = function () {
    console.log(`${this.result.join('')} | error left ${this.errors}`);
    return this;
  };

  this.startAgain = function (word) {
    this.word = word.toLowerCase();
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

const hangman = new Hangman('webpurple');

module.exports = hangman;
