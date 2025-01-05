export function factorial(n: number, i: number = 1, product: number = 1): number {
  // base case
  if (i > n) {
    return product;
  }
  console.log("n:", n, "i:", i, "product:", product);

  return factorial(n, i + 1, product * i);
}

console.log(factorial(5));

export function factorial2(number: number): number {
  // base case
  if (number === 1) {
    return 1;
  } else {
    console.log("number:", number);
    return number * factorial2(number - 1);
  }
}

console.log(factorial2(5));
