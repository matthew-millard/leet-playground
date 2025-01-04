export function sum(low: number, high: number): number {
  if (low >= high) return high;
  return low + sum(low + 1, high);
}

console.log(sum(0, 10));
