/**
 * 704. 二分查找
 * 
 * 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。
 * 
 * @example 1
 * 输入: nums = [-1,0,3,5,9,12], target = 9
 * 输出: 4
 * 解释: 9 出现在 nums 中并且下标为 4
 * 
 * @example 2
 * 输入: nums = [-1,0,3,5,9,12], target = 2
 * 输出: -1
 * 解释: 2 不存在 nums 中因此返回 -1
 * 
 * @tip
 * 1. 你可以假设 nums 中的所有元素是不重复的。
 * 2. n 将在 [1, 10000]之间。
 * 3. nums 的每个元素都将在 [-9999, 9999]之间。
 * 
 * @see https://leetcode-cn.com/problems/binary-search/
 */

/**
 * 
 *
 * @export
 * @param {number[]} nums
 * @param {number} target
 * @returns {number}
 */
export function search(nums: number[], target: number): number {
  let low = 0;
  let high = nums.length - 1;

  while (low < high) {
    const midIdx = Math.floor((high - low) / 2) + low;
    const midNum = nums[midIdx];

    if (midNum === target) {
      return midIdx;
    }

    if (midNum > target) {
      high = midIdx - 1;
    } else {
      low = midIdx + 1;
    }
  }

  return -1;
};