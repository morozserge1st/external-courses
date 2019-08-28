function cutStr(str, num) {
  return str.length > num ? `${str.slice(0, num - 1)}…` : str;
}

module.exports = cutStr;
