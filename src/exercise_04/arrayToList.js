export default function arrayToList(array) {
  // This function creates a linked list from an array.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in array_to_list_spec.js.
  // * Please do NOT modify the signature of the function.
  function Node(val) {
    this.value = val;
    this.next = null;
  }

  if (!array) throw new Error('Creating list from undefined array');
  if (array.length === 0) throw new Error('Creating list from empty array');
  let result;
  let p;
  while (array.length !== 0) {
    if (!result) {
      result = new Node(array.shift());
      p = result;
    } else {
      p.next = new Node(array.shift());
      p = p.next;
    }
  }
  return result;
}
