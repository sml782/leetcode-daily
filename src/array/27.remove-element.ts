/**
 * 27. 移除元素
 * 
 * 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。
 * 不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。
 * 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
 */

// NOTE: 1.使用 splice 删除
export function removeElement(nums: number[], val: number): number {
  let lens = nums.length;
  if (nums.length === 0 || !nums.includes(val)) {
    return lens;
  }
  let index = 0;
  while (index < lens) {
    const item = nums[index];
    if (item !== val) {
      index++;
      continue;
    }
    nums.splice(index, 1);
    lens--;
  }
  return lens;
};

// NOTE: 2. 不为目标值的往前移动
export function removeElement1(nums: number[], val: number): number {
  const lens = nums.length;
  if (lens === 0) {
    return lens;
  }
  let index = 0;
  let newIndex = 0;
  while (index < lens) {
    const item = nums[index];
    if (item !== val) {
      nums[newIndex++] = item;
    }
    index++;
  }
  nums.length = newIndex;
  return newIndex;
};