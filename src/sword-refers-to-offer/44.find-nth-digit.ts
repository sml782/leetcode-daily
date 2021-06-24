/**
 * 剑指 Offer 44. 数字序列中某一位的数字
 * 
 * 数字以0123456789101112131415…的格式序列化到一个字符序列中。
 * 在这个序列中，第5位（从下标0开始计数）是5，第13位是1，第19位是4，等等。
 * 请写一个函数，求任意第n位对应的数字。
 * 
 * @example 示例1:
 * 输入：n = 3
 * 输出：3
 * 
 * @example 示例2:
 * 输入：n = 11
 * 输出：0
 * 
 * @limit 0 <= n < 2^31
 * 
 * @see https://leetcode-cn.com/problems/shu-zi-xu-lie-zhong-mou-yi-wei-de-shu-zi-lcof/
 */


/**
 * 暴力
 *
 * @export
 * @param {number} n
 * @returns {number}
 */
export function findNthDigit(n: number): number {
  let curLen = 0;
  let curIndex = 0;

  if (n === 0) {
    return 0;
  }

  while (curLen < n + 1) {
    const len = curIndex.toString().length;
    curLen += len;
    curIndex++;
  }

  const curString = (curIndex - 1).toString();
  let lastIndex = curString.length - 1;

  while (lastIndex > 0) {
    if (curLen === n + 1) {
      return Number(curString[lastIndex]);
    }
    curLen--;
    lastIndex--;
  }

  return Number(curString[0]);
};

/**
 * 分个位数、十位数、百位数
 *
 * @export
 * @param {number} n
 * @returns {number}
 */
export function findNthDigit1(n: number): number {
  let curLen = 0;
  let curIndex = 0;

  if (n === 0) {
    return 0;
  }

  if (n < ) {

  }

  while (curLen < n + 1) {
    const len = curIndex.toString().length;
    curLen += len;
    curIndex++;
  }

  const curString = (curIndex - 1).toString();
  let lastIndex = curString.length - 1;

  while (lastIndex > 0) {
    if (curLen === n + 1) {
      return Number(curString[lastIndex]);
    }
    curLen--;
    lastIndex--;
  }

  return Number(curString[0]);
};