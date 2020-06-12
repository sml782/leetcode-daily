/**
 * 15. 三数之和
 * 
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
 * 注意：答案中不可以包含重复的三元组。
 */

// NOTE: 暴力破解, 三层 for 循环, 不推荐
export function threeSum(nums: number[]): number[][] {
  const lens = nums.length;
  const result: number[][] = [];
  if (lens < 3) {
    return result;
  }
  function findSum(aitem: number, bitem: number): boolean {
    if (result.length === 0) {
      return false;
    }
    return result.some((item) => {
      const diffItem = [...item];
      const aindex = diffItem.findIndex((ditem) => ditem === aitem);
      if (aindex === -1) {
        return false;
      }
      diffItem.splice(aindex, 1);
      if (diffItem.includes(bitem)) {
        return true;
      }
      return false;
    });
  }
  for (let a = 0; a < lens; a++) {
    const aitem = nums[a];
    for (let b = a + 1; b < lens; b++) {
      const bitem = nums[b];
      if (findSum(aitem, bitem)) {
        continue;
      }
      for (let c = b + 1; c < lens; c++) {
        const citem = nums[c];
        const total = aitem + bitem + citem;
        if (total !== 0) {
          continue;
        }
        result.push([aitem, bitem, citem]);
        break;
      }
    }
  }
  return result;
};

// NOTE: 夹逼原则
export function threeSum1(nums: number[]): number[][] {
  debugger;
  const lens = nums.length;
  const result: number[][] = [];
  if (lens < 3) {
    return result;
  }
  function findSum(aitem: number, bitem: number): boolean {
    if (result.length === 0) {
      return false;
    }
    return result.some((item) => {
      const diffItem = [...item];
      const aindex = diffItem.findIndex((ditem) => ditem === aitem);
      if (aindex === -1) {
        return false;
      }
      diffItem.splice(aindex, 1);
      if (diffItem.includes(bitem)) {
        return true;
      }
      return false;
    });
  }
  nums.sort((a, b) => a - b);
  // 遍历到倒数第三个就可了, 这里只往后遍历
  const mapLens = lens - 2;
  for (let a = 0; a < mapLens; a++) {
    const aitem = nums[a];
    // 首个大于 0 则整个数组无意义再继续了
    if (a === 0 && aitem > 0) {
      break;
    }
    let b = a + 1;
    let c = lens - 1;

    while (b < c) {
      const bitem = nums[b];
      const citem = nums[c];
      // 重复的不计
      if (findSum(aitem, bitem)) {
        while (b < c && nums[b] === nums[++b]) {
          continue;
        }
        continue;
      }
      const total = aitem + bitem + citem;
      if (total > 0) {
        c--;
        continue;
      }
      if (total < 0) {
        b++;
        continue;
      }
      result.push([aitem, bitem, citem]);
      while (b < c && nums[b] === nums[++b]) {
        continue;
      }
      while (b < c && nums[c] === nums[--c]) {
        continue;
      }
    }
  }
  return result;
};