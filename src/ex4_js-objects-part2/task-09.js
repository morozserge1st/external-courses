function addWordToStr(str, word, index) {
  let newStr = str.split(' ');
  return `${newStr.slice(0, index + 1).join(' ')} ${word} ${newStr.slice(index + 1).join(' ')}`;
}

module.exports = addWordToStr;
