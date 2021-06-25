/**
 * 剑指 Offer 62. 圆圈中最后剩下的数字
 * 
 * ! 约瑟夫环问题
 * 
 * 0,1,···,n-1这n个数字排成一个圆圈，从数字0开始，每次从这个圆圈里删除第m个数字（删除后从下一个数字开始计数）。
 * 求出这个圆圈里剩下的最后一个数字。
 * 例如，0、1、2、3、4这5个数字组成一个圆圈，从数字0开始每次删除第3个数字，则删除的前4个数字依次是2、0、4、1，因此最后剩下的数字是3。
 * 
 * @example 示例1
 * 输入: n = 5, m = 3
 * 输出: 3
 * 
 * @example 示例2
 * 输入: n = 10, m = 17
 * 输出: 2
 * 
 * @limit
 * 1 <= n <= 10^5
 * 1 <= m <= 10^6
 * 
 * @see https://leetcode-cn.com/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof/
 */


/**
 * 暴力破解
 *
 * @export
 * @param {number} n
 * @param {number} m
 * @returns {number}
 */
export function lastRemaining(n: number, m: number): number {
  const circleArr = Array.from({ length: n }, (_, index) => index);
  function getNextDelIdx (prevDelIdx = 0) {
    return (prevDelIdx + m - 1) % circleArr.length;
  }
  let delIdx = getNextDelIdx(0);
  while (circleArr.length !== 1) {
    circleArr.splice(delIdx, 1);
    delIdx = getNextDelIdx(delIdx);
  }

  return circleArr[0];
};

/**
 * TODO: xxx
 *
 * @export
 * @param {number} n
 * @param {number} m
 * @returns {number}
 */
export function lastRemaining1(n: number, m: number): number {
  const circleArr = Array.from({ length: n }, (_, index) => index);
  function getNextDelIdx (prevDelIdx = 0) {
    return (prevDelIdx + m - 1) % circleArr.length;
  }
  let delIdx = getNextDelIdx(0);
  while (circleArr.length !== 1) {
    circleArr.splice(delIdx, 1);
    delIdx = getNextDelIdx(delIdx);
  }

  return circleArr[0];
};