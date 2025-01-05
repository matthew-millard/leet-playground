export function sumOfArray(arr) {
    // base case
    if (arr.length === 1) {
        return arr[0];
    }
    // recursively call the subproblem
    return arr[0] + sumOfArray(arr.slice(1));
}
console.log(sumOfArray([1, 2, 3, 4, 5]));
