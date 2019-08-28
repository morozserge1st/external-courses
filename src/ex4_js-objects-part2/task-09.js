function addWordToStr(str, word, index) {
  str = str.split(' ');
  return `${str.slice(0, index + 1).join(' ')} ${word} ${str.slice(index + 1).join(' ')}`;
}

module.exports = addWordToStr;
