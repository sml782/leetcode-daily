/**
 * 42.接雨水
 * 
 * @unfinished
 * 
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 * 
 * @example 1
 * 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
 * 输出：6
 * 解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 
 * 
 * @example 2
 * 输入：height = [4,2,0,3,2,5]
 * 输出：9
 * 
 * @tip
 * n == height.length
 * 1 <= n <= 2 * 10^4
 * 0 <= height[i] <= 10^5
 * 
 * @see https://leetcode-cn.com/problems/trapping-rain-water/
 */

export function trap(height: number[]): number {
  if (height.length < 2) {
    return 0;
  }

  let startIndex = 0;
  let endIndex = 0;
  // let 
  let result = 0;

  function getSubAmount(): void {
    if (endIndex === startIndex || endIndex - 2 < startIndex) {
      startIndex = endIndex;
      return;
    }

    const maxHeight = Math.min(height[startIndex], height[endIndex]);
    let subResult = 0;
    for (let start = startIndex + 1; start < endIndex; start++) {
      subResult += (maxHeight - height[start]);
    }

    result += subResult;
    startIndex = endIndex;
  }

  for (let index = 1; index < height.length; index++) {
    if (endIndex !== 0 && endIndex !== startIndex && height[index] <= height[endIndex]) {
      getSubAmount();
    }

    if (height[index] > 0 && height[startIndex] === 0) {
      startIndex = index;
      continue;
    }

    if (height[index] >= height[startIndex]) {
      if (index - 2 >= startIndex) {
        endIndex = index;
      } else {
        startIndex = endIndex = index;
      }
      continue;
    } else {

    }


    // if (index - 2 >= startIndex && height[index] > height[index - 1]) {
    //   endIndex = index;
    //   continue;
    // }

    // if (height[index] >= height[startIndex]) {
    //   startIndex = endIndex = index;
    //   continue;
    // }
  }

  getSubAmount();

  return result;
};