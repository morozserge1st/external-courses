function showObjKey(obj) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log (`${key} = ${obj[key]}`);
    }
  }
}

module.exports = showObjKey;
