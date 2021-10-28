/**
 * DP 70. 爬楼梯
 * 
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * 注意：给定 n 是一个正整数。
 * 
 * @example 1
 * 输入： 2
 * 输出： 2
 * 解释： 有两种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶
 * 2.  2 阶
 * 
 * @example 2
 * 输入： 3
 * 输出： 3
 * 解释： 有三种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶 + 1 阶
 * 2.  1 阶 + 2 阶
 * 3.  2 阶 + 1 阶
 * 
 * @see https://leetcode-cn.com/problems/climbing-stairs/
 */

/**
 * 递归实现
 *
 * @export
 * @param {number} n
 * @returns {number}
 */
export function climbStairs(n: number): number {
  if (n <= 2) {
    return n;
  }

  return climbStairs(n - 1) + climbStairs(n - 2);
};

/**
 * 循环实现1
 *
 * @export
 * @param {number} n
 * @returns {number}
 */
 export function climbStairs1(n: number): number {
  if (n <= 2) {
    return n;
  }

  let p = 1;
  let q = 1;
  let r = 2;
  
  for (let i = 2; i < n; i ++) {
    p = q;
    q = r;
    r = p + q;
  }

  return r;
};

/**
 * 循环实现2
 *
 * @export
 * @param {number} n
 * @returns {number}
 */
 export function climbStairs2(n: number): number {
  if (n <= 2) {
    return n;
  }

  const tempArr: number[] = [0, 1, 2];
  
  for (let i = 3; i <= n; i ++) {
    tempArr[i] = tempArr[i - 1] = tempArr[i - 2];
  }

  return tempArr[n];
};