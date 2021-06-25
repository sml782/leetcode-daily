/**
 * 剑指 Offer 61. 扑克牌中的顺子
 * 
 * 从扑克牌中随机抽5张牌，判断是不是一个顺子，即这5张牌是不是连续的。
 * 2～10为数字本身，A为1，J为11，Q为12，K为13，而大、小王为 0 ，可以看成任意数字。
 * A 不能视为 14。
 * 
 * @example 示例1
 * 输入: [1,2,3,4,5]
 * 输出: True
 * 
 * @example 示例2
 * 输入: [0,0,1,2,5]
 * 输出: True
 * 
 * @limit
 * 数组长度为 5 
 * 数组的数取值为 [0, 13] .
 * 
 * @see https://leetcode-cn.com/problems/bu-ke-pai-zhong-de-shun-zi-lcof/
 */


/**
 * 排序加暴力举证
 *
 * @export
 * @param {number[]} nums
 * @returns {boolean}
 */
export function isStraight(nums: number[]): boolean {
  nums.sort((a, b) => a - b);
  const kings = [];
  let nextNum = -1;
  for (let index = 0; index < nums.length; index++) {
    const curNum = nums[index];

    if (curNum === 0) {
      if (nextNum === -1) {
        kings.push(curNum);
      } else {
        nextNum++;
      }
      continue;
    }

    if (nextNum === -1) {
      nextNum = curNum + 1;
      continue;
    }

    if (curNum === nextNum) {
      nextNum++;
      continue;
    }

    if (kings.length > 0) {
      kings.pop();
      nextNum++;
      index--;
      continue;
    }

    return false;
  }

  return true;
};
