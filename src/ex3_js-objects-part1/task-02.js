function showObjKey(obj) {
  for (const key in obj) {
    console.log (`${key} = ${obj[key]}`);
  }
}

module.exports = showObjKey;
