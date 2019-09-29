function deepClone(obj) {
  let clone = {};
  if (obj === null || typeof obj !== "object") return obj;
  if (obj instanceof Array) {
    clone = [];
    for (let i = 0, len = obj.length; i < len; i++) {
      clone[i] = deepClone(obj[i]);
    }
    return clone;
  }
  if (obj instanceof Object) {
    clone = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        clone[key] = deepClone(obj[key]);
      }
    }
    return clone;
  }
}

module.exports = deepClone;
