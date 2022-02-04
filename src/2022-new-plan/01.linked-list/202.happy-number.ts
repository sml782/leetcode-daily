/**
 * 202. 快乐数
 * 
 * 编写一个算法来判断一个数 n 是不是快乐数。
 * 
 * 「快乐数」 定义为：
 * 1.对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。
 * 2.然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。
 * 3.如果这个过程 结果为 1，那么这个数就是快乐数。
 * 
 * 如果 n 是 快乐数 就返回 true ；不是，则返回 false 。
 * 
 * @example 1
 * 输入：n = 19
 * 输出：true
 * 解释：
 * 1^2 + 9^2 = 82
 * 8^2 + 2^2 = 68
 * 6^2 + 8^2 = 100
 * 1^2 + 0^2 + 0^2 = 1
 * 
 * @example 2
 * 输入：n = 2
 * 输出：false
 * 
 * @tip
 * 1 <= n <= 2^31 - 1
 * 
 * @see https://leetcode-cn.com/problems/happy-number/
 */

/**
 * 根据当前值获取下一个值
 * 
 * @param {number} n 当前值
 * @return {number} 下一个值
 */
function getNext(n: number): number {
  const strN = n.toString();
  return strN.split('').reduce((prevValue, item) => {
    return prevValue + Number(item) ** 2;
  }, 0);
}

/**
 * 暴力破解
 * 
 * @param {number} n
 * @param {number} cycleTime
 * @return {boolean}
 */
export function isHappy(n: number, cycleTime = 0): boolean {
  if (n === 1) {
    return true;
  }

  cycleTime++;

  const strN = n.toString();

  if (strN.includes('e')) {
    return false;
  }

  let nextNum = 0;
  let strLen = strN.length;

  while (strLen) {
    const currentNum = Number(strN.charAt(strLen - 1));
    nextNum += currentNum ** 2;
    strLen--;
  }

  if (nextNum === 1) {
    return true;
  }

  if (cycleTime > 10) {
    return false;
  }

  return isHappy(nextNum, cycleTime);
};

/**
 * hash表记录重复值
 * 
 * @param {number} n
 * @param {Map<number, boolean>} hashMap
 * @return {boolean}
 */
export function isHappy1(n: number, hashMap: Map<number, boolean> = new Map()): boolean {
  if (n === 1) {
    return true;
  }

  const strN = n.toString();

  if (strN.includes('e')) {
    return false;
  }

  let nextNum = 0;
  let strLen = strN.length;

  while (strLen) {
    const currentNum = Number(strN.charAt(strLen - 1));
    nextNum += currentNum ** 2;
    strLen--;
  }

  if (hashMap.has(nextNum)) {
    return false;
  }

  hashMap.set(nextNum, true);

  return isHappy1(nextNum, hashMap);
};

/**
 * 快慢指针
 * 1.创建一个慢指针，一次走一步，再创建一个快指针，一次走两步。
 * 2.当快慢指针相遇，代表形参环路，该数不是快乐数。
 * 3.若指针移动过程中，找到了 11，则当前数是一个快乐数。
 * 
 * @param {number} n
 * @return {*}
 */
export function isHappy2(n: number): boolean {
  if (n === 1) {
    return true;
  }

  let slowNode = n;
  let fastNode = getNext(n);

  while (fastNode !== 1 && slowNode !== fastNode) {
    slowNode = getNext(slowNode);
    fastNode = getNext(getNext(fastNode));
  }

  return fastNode === 1;
};
