export function findLongestSubarray(arr: number[], contraint: number): number {
  let left = 0;
  let right = 0;
  let current = 0;
  let longestSubarrayLength = 0;

  while (right < arr.length) {
    current += arr[right];

    // Shrink the window if the sum exceeds the constraint
    while (current > contraint) {
      current -= arr[left];
      left++;
    }

    // Calculate the length of the current valid subarray
    const diff = right - left + 1;
    if (diff > longestSubarrayLength) {
      longestSubarrayLength = diff;
    }

    // Expand the window by moving the right pointer
    right++;
  }

  return longestSubarrayLength;
}

export function countSubarraysWithProductLessThanConstraint(arr: number[], contraint: number): number {
  if (contraint <= 1) {
    return 0;
  }
  let left = 0;
  let current = 1;
  let count = 0;

  for (let right = 0; right < arr.length; right++) {
    current *= arr[right];

    while (current >= contraint) {
      current /= arr[left];
      left++;
    }

    count += right - left + 1;
  }

  return count;
}
