export function findMiddleValue(arr: number[]) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    if (left === right) {
      return arr[left];
    } else if (left === right - 1) {
      return arr[left]; // round down if array is even
    }

    left++;
    right -= 1;
  }
}

export function isPalindrome(string: string): boolean {
  if (typeof string !== 'string' || !string.trim()) return false;

  let left = 0;
  let right = string.length - 1;

  while (left < right) {
    if (string[left] !== string[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

export function sortedTwoSum(arr: number[], target: number): boolean {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === target) {
      return true;
    } else if (sum > target) {
      // move right pointer
      right--;
    } else {
      // move left pointer
      left++;
    }
  }

  return false;
}
