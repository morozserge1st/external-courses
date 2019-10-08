function isObjKey(str, obj) {
  for (const key in obj) {
    if (key === str) {
      return true;
    }
  }
  return false;
}

module.exports = isObjKey;
