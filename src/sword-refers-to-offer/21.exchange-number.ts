/**
 * 剑指 Offer 21. 调整数组顺序使奇数位于偶数前面
 * 
 * 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，
 * 使得所有奇数位于数组的前半部分，所有偶数位于数组的后半部分。
 * 
 * @example 示例：
 * 输入：nums = [1,2,3,4]
 * 输出：[1,3,2,4] 
 * 注：[3,1,2,4] 也是正确的答案之一。
 * 
 * 提示：
 * 1 <= nums.length <= 50000
 * 1 <= nums[i] <= 10000
 */

export function exchange(nums: number[]): number[] {
  if (nums.length === 0) {
    return nums;
  }

  let curChangeIdx = 0;
  let idx = 0;
  while (idx < nums.length) {
    const remainder = nums[idx] % 2;
    if (curChangeIdx === idx) {
      if (remainder !== 0) {
        idx++;
        curChangeIdx++;
      } else {
        idx++;
      }
      continue;
    }
    if (remainder === 0) {
      idx++;
      continue;
    }
    [nums[idx], nums[curChangeIdx]] = [nums[curChangeIdx], nums[idx]];
    idx++;
    curChangeIdx++;
  }

  return nums;
};