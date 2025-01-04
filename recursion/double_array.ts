export function doubleArray(arr: number[], index = 0): number[] {
  // base case
  if (index >= arr.length) {
    return arr;
  }

  // double value
  arr[index] *= 2;

  // call recursively
  return doubleArray(arr, index + 1);
}

console.log(doubleArray([1, 2, 3, 4, 5]));
