export function stringReverse(str) {
    // base case
    if (str.length === 1)
        return str[0];
    // recursively call subproblem
    return stringReverse(str.slice(1)) + str[0];
}
console.log(stringReverse("abcdefghijklmnopqrstuvwxyz"));
