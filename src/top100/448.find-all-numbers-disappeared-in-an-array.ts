/**
 * 448. 找到所有数组中消失的数字
 * 
 * 给你一个含 n 个整数的数组 nums ，其中 nums[i] 在区间 [1, n] 内。
 * 请你找出所有在 [1, n] 范围内但没有出现在 nums 中的数字，并以数组的形式返回结果。
 * 
 * @example 1
 * 输入：nums = [4,3,2,7,8,2,3,1]
 * 输出：[5,6]
 * 
 * @example 2
 * 输入：nums = [1,1]
 * 输出：[2]
 * 
 * @tip
 * n == nums.length
 * 1 <= n <= 10^5
 * 1 <= nums[i] <= n
 * 
 * @upgrade
 * 你能在不使用额外空间且时间复杂度为 O(n) 的情况下解决这个问题吗? 你可以假定返回的数组不算在额外空间内。
 * 
 * @see https://leetcode-cn.com/problems/find-all-numbers-disappeared-in-an-array/
 */

/**
 * 使用额外空间
 *
 * @export
 * @param {number[]} nums
 * @return {*}  {number[]}
 */
export function findDisappearedNumbers(nums: number[]): number[] {
  const maxArr: number[] = Array.from({ length: nums.length }, (_, index) => index + 1);
  let index = 0;

  while (index < nums.length) {
    const curNum = nums[index];
    const hasIndex = maxArr.indexOf(curNum);

    if (hasIndex > -1) {
      maxArr.splice(hasIndex, 1);
    }

    index++;
  }

  return maxArr;
};

/**
 * 不使用额外空间
 *
 * @export
 * @param {number[]} nums
 * @return {*}  {number[]}
 */
export function findDisappearedNumbers1(nums: number[]): number[] {
  const len = nums.length;
  for (const curItem of nums) {
    const realIndex = (curItem - 1) % len;
    nums[realIndex] = len + nums[realIndex];
  }

  const result: number[] = [];
  for (const [index, curItem] of nums.entries()) {
    if (curItem <= len) {
      result.push(index + 1);
    }
  }

  return result;
};