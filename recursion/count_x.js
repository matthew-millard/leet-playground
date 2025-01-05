export function countX(str) {
    // base case - out of bounds
    if (str.length === 0)
        return 0;
    // recursively call countX with subproblem
    if (str[0] === "x") {
        return 1 + countX(str.slice(1));
    }
    else {
        return countX(str.slice(1));
    }
}
console.log(countX("axbxcxdxxx"));
