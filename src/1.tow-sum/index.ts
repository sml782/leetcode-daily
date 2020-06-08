// 双层 for 循环
export function twoSum1 (nums: number[], target: number): number[] {
  const lens = nums.length;
  for (let i = 0; i < lens - 1; i++) {
    const leftNum = nums[i];
    const lastNum = target - leftNum;
    for (let j = i + 1; j < lens; j++) {
      const rightNum = nums[j];
      if (rightNum === lastNum) {
        return [i, j];
      }
    }
  }
  return [];
};

// 双层 while 循环
export function twoSum2 (nums: number[], target: number): number[] {
  const lens = nums.length;
  let i = 0;
  while (i < lens - 1) {
    const leftNum = nums[i];
    const lastNum = target - leftNum;
    let j = i + 1;
    while (j < lens) {
      const rightNum = nums[j];
      if (rightNum === lastNum) {
        return [i, j];
      }
      j++;
    }
    i++;
  }
  return [];
};

// 单层循环+借助辅助工具
export function twoSum3 (nums: number[], target: number): number[] {
  const numWeek = new Map();
  const lens = nums.length;
  let i = 0;
  while (i < lens) {
    const leftNum = nums[i];
    const lastNum = target - leftNum;
    if (numWeek.has(lastNum)) {
      return [Math.min.apply(null, numWeek.get(lastNum)), i];
    }
    const lastIndexs = numWeek.get(lastNum) || [];
    numWeek.set(leftNum, lastIndexs.concat(i));
    i++;
  }
  return [];
};