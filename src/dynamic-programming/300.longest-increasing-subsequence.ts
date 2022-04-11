/**
 * 300.最长递增子序列
 * 
 * @unfinished
 * 
 * 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。
 * 子序列 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。
 * 例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。
 * 
 * @example 1
 * 输入：nums = [10,9,2,5,3,7,101,18]
 * 输出：4
 * 解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
 * 
 * @example 2
 * 输入：nums = [0,1,0,3,2,3]
 * 输出：4
 * 
 * @example 3
 * 输入：nums = [7,7,7,7,7,7,7]
 * 输出：1
 * 
 * @tip
 * 1 <= nums.length <= 2500
 * -10^4 <= nums[i] <= 10^4
 * 
 * @upgrade 你能将算法的时间复杂度降低到 O(n log(n)) 吗?
 * 
 * @see https://leetcode-cn.com/problems/longest-increasing-subsequence/
 */

/**
 * 动态规划
 *
 * @export
 * @param {number[]} nums
 * @return {*}  {number}
 */
export function lengthOfLIS(nums: number[]): number {
  if (nums.length < 2) {
    return nums.length;
  }
  return 0;
};