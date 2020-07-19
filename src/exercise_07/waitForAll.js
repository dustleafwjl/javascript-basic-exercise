export default function waitForAll(...promises) {
  // This function returns a promise which will be triggered when all the `promises` are completed.
  //
  // If all the `promises` are resolved, then the returned promise will be resolved. Otherwise,
  // if one of the `promises` is rejected, then the returned promise will be rejected.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in wait_for_all_spec.js.
  // * Please do NOT modify the signature of the function.
  function isPromise(obj) {
    return !!obj &&
      (typeof obj === 'object' || typeof obj === 'function') &&
      typeof obj.then === 'function';
  }
  let isFail = false;
  const result = []
  for (let i = 0; i < promises.length; i++) {
    if (!isPromise(promises[i])) {
      throw new Error('Not all elements are promises.');
    }
    // eslint-disable-next-line no-loop-func
    result.push(promises[i].catch(() => {
      isFail = true;
    }));
  }
  return Promise.all(result)
    .then((res) => {
      if (isFail) {
        throw new Error('');
      }
      return res;
    });
}