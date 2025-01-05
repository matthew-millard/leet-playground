export function arraySum(arr, i = 0, sum = 0) {
    // base case
    if (i === arr.length)
        return sum;
    sum += arr[i];
    return arraySum(arr, i + 1, sum);
}
console.log(arraySum([1, 2, 3, 4, 5]));
