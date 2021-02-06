/**
 * 剑指 Offer 39. 数组中出现次数超过一半的数字
 * 
 * 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
 * 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
 * 
 * @example 示例 1:
 * 输入: [1, 2, 3, 2, 2, 2, 5, 4, 2]
 * 输出: 2
 * 
 * 限制：
 * 1 <= 数组长度 <= 50000
 */



export function majorityElement(nums: number[]): number {
  const length = nums.length;
  const midLen = Math.floor(length / 2);
  const map: Map<number, number> = new Map();
  if (length === 1 || length === 2) {
    return nums[0];
  }
  for (const item of nums) {
    const curNum = map.get(item);
    if (!curNum) {
      map.set(item, 1);
      continue;
    }
    if (curNum >= midLen) {
      return item;
    }
    map.set(item, curNum + 1);
  }
  return nums[0];
};


/**
 * NOTE: 摩尔投票算法
 * 
 * 两两抵消，直到找到不可抵消的肯定是大于半数的
 *
 * @export
 * @param {number[]} nums
 * @returns {number}
 */
export function majorityElement1(nums: number[]): number {
  if (nums.length === 1 || nums.length === 2) {
    return nums[0];
  }
  let majority = nums[0];
  let count = 0;
  for (const item of nums) {
    if (count === 0) {
      majority = item;
    }
    if (item === majority) {
      count++;
      continue;
    }
    count--;
  }
  return majority;
};