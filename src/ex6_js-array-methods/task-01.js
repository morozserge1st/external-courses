function sliceAnalog(arr, begin, end) {
  const result = [];
  if (end === undefined) {
    end = arr.length;
  } else if (end < 0) {
    end += arr.length;
  }
  if (begin === undefined) {
    begin = 0;
  } else if (begin < 0) {
    begin += arr.length;
  }
  for (begin; begin < end; begin++) {
    result.push(arr[begin]);
  }
  return result;
}

module.exports = sliceAnalog;
