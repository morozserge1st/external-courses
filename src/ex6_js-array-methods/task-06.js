function reduceAnalog(arr, callback, initialValue) {
  let result = 0;
  let i = 0;
  if (initialValue) {
    result = initialValue;
  } else {
    result = arr[0];
    i++
  }
  for (i; i < arr.length; i++) {
    result = callback(result, arr[i], i, arr);
  }
  return result;
}

module.exports = reduceAnalog;