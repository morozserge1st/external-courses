function countLetter(str) {
  const result = {};
  str = str.toLowerCase().split('').map((item) => {
    if (result[item]) {
      result[item] += 1;
    } else if (item !== ' ') {
      result[item] = 1;
    }
  });
  for (const key in result) {
    if (result.hasOwnProperty(key)) {
      console.log(`Символ ${key} встречается ${result[key]} раз`);
    }
  }
}

module.exports = countLetter;
