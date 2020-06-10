// NOTE: 1.使用 splice 删除
export function removeElement(nums: number[], val: number): number {
  let lens = nums.length;
  if (nums.length === 0 || !nums.includes(val)) {
    return nums.length;
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
  debugger;
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