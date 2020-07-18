export default function flattenArray(array) {
  // This function flattens a nested array into a sequence.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in flatten_array_spec.js.
  // * Please do NOT modify the signature of the function.
  if (!array) throw new Error('Flatten undefined or null array');
  // return array.length === 0 ? [] : array.toString().split(',').map(ele => +ele);
  const result = [];
  while (array.length !== 0) {
    const ele = array.shift();
    if (Object.prototype.toString.call(ele) === '[object Array]') {
      while (ele.length !== 0) {
        result.push(ele.shift());
      }
    } else {
      result.push(ele);
    }
  }
  return result;
}
