/**
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。
 * 如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 * 你可以假设数组中无重复元素。
 */

// NOTE: 1.循环查找
export function searchInsert(nums: number[], target: number): number {
  const lens = nums.length;
  if (lens === 0) {
    return 0;
  }
  let prevItem = -Infinity;
  let index = 0;
  while (index < lens) {
    const item = nums[index];
    if (prevItem === target) {
      return index;
    }
    if (item < target) {
      prevItem = item;
      index++;
      continue;
    }
    break;
  }
  return index;
};

// NOTE: 2.二分查找
export function searchInsert1(nums: number[], target: number): number {
  const lens = nums.length;
  if (lens === 0) {
    return 0;
  }
  let minIndex = 0;
  let maxIndex = lens - 1;
  while (minIndex <= maxIndex) {
    const midIndex = Math.floor((minIndex + maxIndex) / 2);
    const midItem = nums[midIndex];
    if (midItem === target) {
      return midIndex;
    }
    if (midItem < target) {
      minIndex = midIndex + 1;
      continue;
    }
    maxIndex = midIndex - 1;
  }
  return minIndex;
};