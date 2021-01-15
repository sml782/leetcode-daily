/**
 * 剑指 Offer 10- I. 斐波那契数列
 * 
 * > 写一个函数，输入 `n`，求斐波那契（Fibonacci）数列的第 n 项。
 * 斐波那契数列的定义如下：
 * F(0) = 0,   F(1) = 1
 * F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
 * 
 * 斐波那契数列由 0 和 1 开始，之后的斐波那契数就是由之前的两数相加而得出。
 * 答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。
 * 
 * @example 示例 1：
 * 输入：n = 2
 * 输出：1
 * 
 * @example 示例 2：
 * 输入：n = 5
 * 输出：5
 * 
 * 提示：
 * 0 <= n <= 100
 */


// NOTE: 傻瓜递归，会爆栈
export function fib(n: number): number {
  if (n <= 1) {
    return n;
  }
  return (fib(n - 1) + fib(n - 2)) % 1000000007;
};


/**
 * NOTE: 递归 + 动态规划
 * 
 * @export
 * @param {number} n
 * @returns {number}
 */
export function fib1(n: number): number {
  const cacheList: number[] = [0, 1];
  function recursion(num: number): number {
    if (num <= 1) {
      return num;
    }
    if (cacheList[num]) {
      return cacheList[num];
    }
    cacheList[num] = recursion(num - 1) + recursion(num - 2);
    return cacheList[num] % 1000000007;
  }
  
  return recursion(n);
};


/**
 * NOTE: 改良版动态规划 + 循环
 * 
 * @export
 * @param {number} n
 * @returns {number}
 */
export function fib2(n: number): number {
  if (n <= 1) {
    return n;
  }
  let a = 1;
  let b = 1;
  let c = 0;
  while (n-- > 0) {
    a = b;
    b = c;
    c = (a + b) % 1000000007;
  }
  return c;
};