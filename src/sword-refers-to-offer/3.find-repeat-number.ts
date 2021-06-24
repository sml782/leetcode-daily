/**
 * 剑指 Offer 03. 数组中重复的数字
 * 
 * 找出数组中重复的数字。
 * 
 * 在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。
 * 数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字
 * 
 * @example 示例 1
 * 输入：[2, 3, 1, 0, 2, 5, 3]
 * 输出：2 或 3 
 * 
 * @see https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/
 */


// NOTE: 利用 hashlist 计算元素的个数
// 时间复杂度 O(n), 空间复杂度 O(n)
export function findRepeatNumber(nums: number[]): number {
  const mapList: Record<string, number> = {};
  for (const num of nums) {
    if (!mapList[num]) {
      mapList[num] = 1;
      continue;
    }
    return num;
  }
  return -1;
};


/**
 * NOTE: 原地算法，利用相同索引可能对应多个值来判断
 * 
 * 遍历中，第一次遇到数字 x 时，将其交换至索引 x 处;
 * 而当第二次遇到数字 x 时，一定有 nums[x] = xnums[x] = x ，此时即可得到一组重复数字
 */
export function findRepeatNumber1(nums: number[]): number {
  let index = 0;
  while (index < nums.length) {
    if (nums[index] === index) {
      index++;
      continue;
    }
    if (nums[nums[index]] === nums[index]) {
      return nums[index];
    }
    [nums[nums[index]], nums[index]] = [nums[index], nums[nums[index]]];
  }
  return -1;
};