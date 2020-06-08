interface TwoNum {
  (nums: number[], target: number): number[]
};

// 双层 for 循环
export const twoSumFor1: TwoNum = (nums, target) => {
  const lens = nums.length;
  for (let i = 0; i < lens - 1; i++) {
    const leftNum = nums[i];
    for (let j = i + 1; j < lens; j++) {
      const lastNum = target - leftNum;
      const rightNum = nums[j];
      if (rightNum === lastNum) {
        return [i, j];
      }
    }
  }
  return [];
};

// 层 for 循环
export const twoSumFor2: TwoNum = (nums, target) => {
  const lens = nums.length;
  for (let i = 0; i < lens - 1; i++) {
    const leftNum = nums[i];
    for (let j = i + 1; j < lens; j++) {
      const lastNum = target - leftNum;
      const rightNum = nums[j];
      if (rightNum === lastNum) {
        return [i, j];
      }
    }
  }
  return [];
};