export function factorial(n, i = 1, product = 1) {
    // base case
    if (i > n) {
        return product;
    }
    console.log("n:", n, "i:", i, "product:", product);
    return factorial(n, i + 1, product * i);
}
console.log(factorial(5));
export function factorial2(number) {
    // base case
    if (number === 1) {
        return 1;
    }
    else {
        console.log("number:", number);
        return number * factorial2(number - 1);
    }
}
console.log(factorial2(5));
