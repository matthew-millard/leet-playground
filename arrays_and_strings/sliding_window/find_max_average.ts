export function findMaxAverage(nums: number[], k: number): number {
  if (nums.length === 0 || k > nums.length) {
    throw new Error("Invalid input");
  }

  // Calculate the sum of the first window of size k
  let maxSum = 0;
  for (let i = 0; i < k; i++) {
    maxSum += nums[i];
  }

  let currSum = maxSum;

  // Use a sliding window to calculate the sum of subsequent windows
  for (let i = k; i < nums.length; i++) {
    currSum += nums[i] - nums[i - k];
    maxSum = Math.max(maxSum, currSum);
  }

  // Return the maximum average
  return maxSum / k;
}
