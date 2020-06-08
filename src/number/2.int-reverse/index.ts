// 通过 string + []
export function reverse(x: number): number {
  const sign = Math.sign(x);
  if (sign === x) {
    return x;
  }
  const range = [-(2 ** 31), 2 ** 31 - 1];
  const y = Number(String(Math.abs(x)).split('').reverse().join('')) * sign;
  if (y > range[1] || y < range[0]) {
    return 0;
  }
  return y;
};