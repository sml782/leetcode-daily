/**
 * 剑指 Offer 11. 旋转数组的最小数字
 * 
 * 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
 * 输入一个递增排序的数组的一个旋转，输出旋转数组的最小元素。
 * 例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一个旋转，该数组的最小值为 1。
 * 
 * @example 示例 1：
 * 输入：[3,4,5,1,2]
 * 输出：1
 * 
 * @example 示例 2：
 * 输入：[2,2,2,0,1]
 * 输出：0
 */


// NOTE: 暴力循环，和头部比，如果找到第比头小的
export function minArray(numbers: number[]): number {
  const length = numbers.length;
  if (numbers.length === 1) {
    return numbers[0];
  }
  if (numbers[0] < numbers[length - 1]) {
    return numbers[0];
  }
  if (length === 2 && numbers[0] > numbers[length - 1]) {
    return numbers[length - 1];
  }
  for(let i = 0;i < numbers.length; i++){
    if(numbers[i] < numbers[0]) {
      return numbers[i];
    }
  }
  return numbers[0];
} 


// NOTE: 二分查找
export function minArray1(numbers: number[]): number {
  if (numbers.length === 1) {
    return numbers[0];
  }

  let leftIndex = 0;
  let rightIndex = numbers.length - 1;

  if (numbers.length === 2) {
    if (numbers[leftIndex] === numbers[rightIndex]) {
      return numbers[0];
    }
    if (numbers[leftIndex] < numbers[rightIndex]) {
      return numbers[leftIndex];
    }
    return numbers[rightIndex];
  }

  if (numbers[leftIndex] < numbers[rightIndex]) {
    return numbers[leftIndex];
  }

  let midIndex = Math.floor((leftIndex + rightIndex) / 2);
  let minNum = numbers[midIndex];
  while (true) {
    if ((midIndex === leftIndex && midIndex === rightIndex) || minNum < numbers[midIndex - 1]) {
      return minNum;
    }

    // 比开头小，比前一个大
    if (minNum < numbers[0]) {
      if (minNum < numbers[midIndex - 1]) {
        return minNum;
      } else {
        rightIndex = midIndex - 1;
      }
    } else if (minNum > numbers[0]) {
      if (minNum <= numbers[midIndex + 1]) {
        leftIndex = midIndex + 1;
      } else {
        return numbers[midIndex + 1];
      }
    }

    midIndex = Math.floor((leftIndex + rightIndex) / 2);
    minNum = numbers[midIndex];
    
    // if (midIndex === leftIndex) {
    //   return minNum;
    // }
  }
};