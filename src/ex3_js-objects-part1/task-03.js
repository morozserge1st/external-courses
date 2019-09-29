function isObjKey(str, obj) {
  let result = false;
  for (const key in obj) {
    if (key === str) {
      result = true;
    }
  }
  return result;
}

module.exports = isObjKey;
