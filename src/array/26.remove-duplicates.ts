// NOTE: 1.splice 删除, 删除一个会让后面元素都往前移动
export function removeDuplicates(nums: number[]): number {
  let lens = nums.length;
  if (lens <= 1) {
    return lens;
  }
  let index = 0;
  while (index < lens) {
    if (!index) {
      index++;
      continue;
    }
    const item = nums[index];
    const prevItem = nums[index - 1];
    if (item !== prevItem) {
      index++;
      continue;
    }
    nums.splice(index, 1);
    lens--;
  }
  return lens;
};

// NOTE: 2.数组内部等
export function removeDuplicates1(nums: number[]): number {
  const lens = nums.length;
  if (lens <= 1) {
    return lens;
  }
  let index = 0;
  let smartIndex = 1;
  while (index < lens) {
    const item = nums[index];
    const prevItem = nums[index - 1];
    if (!index || item === prevItem) {
      index++;
      continue;
    }
    nums[smartIndex] = item;
    index++;
    smartIndex++;
    continue;
  }
  return smartIndex;
};

// 3.用一个变量记住上一次值, 防止多次取值, Set 取最大值
export function removeDuplicates2(nums: number[]): number {
  const lens = nums.length;
  if (lens <= 1) {
    return lens;
  }
  const maxlen: number = new Set(nums).size;
  let maxNum = nums[0];
  let index = 1;
  let smartIndex = 1;
  while (index < lens) {
    const item = nums[index];
    if (item === maxNum) {
      index++;
      continue;
    }
    maxNum = item;
    nums[smartIndex++] = item;
    index++;
    if (smartIndex === maxlen) {
      return maxlen;
    }
  }
  return maxlen;
};
