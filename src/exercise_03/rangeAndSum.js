export function range(start, end) {
  // This function creates an array which contains numbers within a range specified by `start`
  // and `end`.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.
  const len = end - start;
  const result = [];
  let indexNum = start;
  for (let i = 0; i < Math.abs(len); i ++) {
    result.push(indexNum);
    indexNum = len > 0 ? indexNum + 1 : indexNum - 1;
  }
  return result;
}

export function sum(...numbers) {
  // This function sums all the numbers in the array and returns the final result.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.
  if (!numbers) return 0;
  return numbers.reduce((pre, ele) => pre + ele, 0);
}
