function copyObj(obj) {
  let newObj = Object.assign({}, obj);
  return newObj;
}

module.exports = copyObj;
