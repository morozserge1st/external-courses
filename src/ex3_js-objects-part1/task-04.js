function addObjKey(str, obj) {
  let newObj = obj;
  if (!newObj.hasOwnProperty(str)) {
    newObj[str] = 'new';
  }
  return newObj;
}

module.exports = addObjKey;
