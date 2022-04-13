/**
 * DP 509. 斐波那契数
 * 
 * 斐波那契数，通常用 F(n) 表示，形成的序列称为 斐波那契数列 。
 * 该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：
 * F(0) = 0，F(1) = 1
 * F(n) = F(n - 1) + F(n - 2)，其中 n > 1
 * 给你 n ，请计算 F(n) 。
 * 
 * @example 1
 * 输入：2
 * 输出：1
 * 解释：F(2) = F(1) + F(0) = 1 + 0 = 1
 * 
 * @example 2
 * 输入：3
 * 输出：2
 * 解释：F(3) = F(2) + F(1) = 1 + 1 = 2
 * 
 * @example 3
 * 输入：4
 * 输出：3
 * 解释：F(4) = F(3) + F(2) = 2 + 1 = 3
 * 
 * @see https://leetcode-cn.com/problems/fibonacci-number/
 */

/**
 * 递归实现
 *
 * @export
 * @param {number} n
 * @returns {number}
 */
export function fib(n: number, historyList = new Map<number, number>()): number {
  if (n < 2) {
    return n;
  }

  if (historyList.has(n)) {
    return historyList.get(n) || 0;
  }

  const result = fib(n - 1, historyList) + fib(n - 2, historyList);
  historyList.set(n, result);

  return result;
};


/**
 * 循环实现
 *
 * @export
 * @param {number} n
 * @returns {number}
 */
export function fib1(n: number): number {
  if (n < 2) {
    return n;
  }
  
  let p = 0;
  let q = 0;
  let r = 1;

  for (let i = 2; i <= n; i++) {
    p = q;
    q = r;
    r = p + q;
  }

  return r;
};
