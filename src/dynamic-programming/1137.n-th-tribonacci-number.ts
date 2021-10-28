/**
 * DP 1137. 第 N 个泰波那契数
 * 
 * 泰波那契序列 Tn 定义如下： 
 * T0 = 0, T1 = 1, T2 = 1, 且在 n >= 0 的条件下 T(n+3) = Tn + T(n+1) + T(n+2)
 * 给你整数 n，请返回第 n 个泰波那契数 Tn 的值。
 * 
 * @example 1
 * 输入：n = 4
 * 输出：4
 * 解释：
 * T_3 = 0 + 1 + 1 = 2
 * T_4 = 1 + 1 + 2 = 4
 * 
 * @example 2
 * 输入：n = 25
 * 输出：1389537
 * 
 * @tip
 * 
 * 0 <= n <= 37
 * 答案保证是一个 32 位整数，即 answer <= 2^31 - 1。
 * 
 * @see https://leetcode-cn.com/problems/n-th-tribonacci-number/
 */


/**
 * 递归实现
 * 
 * ! 超时
 *
 * @export
 * @param {number} n
 * @returns {number}
 */
export function tribonacci(n: number): number {
  if (n < 2) {
    return n;
  }

  if (n === 2) {
    return 1;
  }

  return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
};

/**
 * 循环实现
 *
 * @export
 * @param {number} n
 * @returns {number}
 */
export function tribonacci1(n: number): number {
  if (n < 2) {
    return n;
  }

  if (n === 2) {
    return 1;
  }

  let p = 0;
  let q = 0;
  let r = 1;
  let s = 1;

  for (let i = 3; i <= n; i++) {
    p = q;
    q = r;
    r = s;
    s = p + q + r;
  }

  return s;
};
