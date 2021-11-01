/**
 * DP 198. 打家劫舍
 * 
 * 你是一个专业的小偷，计划偷窃沿街的房屋。
 * 每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
 * 给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。
 * 
 * @example 1
 * 输入：[1,2,3,1]
 * 输出：4
 * 解释：偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
 * 偷窃到的最高金额 = 1 + 3 = 4 。
 * 
 * @example 2
 * 输入：[2,7,9,3,1]
 * 输出：12
 * 解释：偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
 * 偷窃到的最高金额 = 2 + 9 + 1 = 12 。
 * 
 * @tip
 * 1 <= nums.length <= 100
 * 0 <= nums[i] <= 400
 * 
 * @see https://leetcode-cn.com/problems/house-robber/
 */

/**
 * 数组保存
 *
 * @export
 * @param {number[]} nums
 * @returns {number}
 */
export function rob(nums: number[]): number {
  if (nums.length < 2) {
    return nums[0] || 0;
  }

  const tempArr: number[] = [];

  tempArr[0] = nums[0];
  tempArr[1] = Math.max(nums[0], nums[1]);

  for (let index = 2; index < nums.length; index++) {
    tempArr[index] = Math.max(tempArr[index - 1], tempArr[index - 2] + nums[index]);
  }

  return tempArr[nums.length - 1];
};

/**
 * 滚动数组
 *
 * @export
 * @param {number[]} nums
 * @returns {number}
 */
export function rob1(nums: number[]): number {
  if (nums.length < 2) {
    return nums[0] || 0;
  }

  let p = nums[0];
  let q = Math.max(nums[0], nums[1]);

  for (let index = 2; index < nums.length; index++) {
    const temp = q;
    q = Math.max(p + nums[index], q);
    p = temp;
  }

  return q;
};