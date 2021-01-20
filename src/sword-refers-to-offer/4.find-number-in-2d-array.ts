/**
 * 剑指 Offer 04. 二维数组中的查找
 * 
 * 在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
 * 请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 * 
 * @example 示例:
 * 现有矩阵 matrix 如下：
 * [
    [1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
  ]
 * 给定 target = 5，返回 true。
 * 给定 target = 20，返回 false。
 * 
 * 限制：
 * 0 <= n <= 1000
 * 0 <= m <= 1000
 */


// NOTE: 暴力破解
// 时间复杂度 O(n2) 空间复杂度 O(n)
export function findNumberIn2DArray(matrix: number[][], target: number): boolean {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return false;
  }

  for (const line of matrix) {
    for (const item of line) {
      if (item === target) {
        return true;
      }
    }
  }

  // 没找到
  return false;
};

/**
 * NOTE: 直接找规律吧
 * 
 * 现在第一行找最后一个元素 x，如果 x > target，往前找到比他小或者等于，如果有则进行下一行；
 * 反之从下一行开始进行 1。
 * 
 */
export function findNumberIn2DArray1(matrix: number[][], target: number): boolean {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return false;
  }

  let lineIndex = 0;
  while (lineIndex < matrix.length) {
    const line = matrix[lineIndex];
    for (let idx = line.length - 1; idx >= 0; idx--) {
      if (line[idx] > target) {
        continue;
      }
      if (line[idx] === target) {
        return true;
      }
      break;
    }
    lineIndex++;
  }

  // 没找到
  return false;
};


/**
 * NOTE: 直接找规律吧 2
 * 
 * 单层循环，时间复杂度优化
 * 
 * 现在第一行找最后一个元素 x，如果 x > target，往前找到比他小或者等于，如果有则进行下一行；
 * 反之从下一行开始进行 1。
 * 
 */
export function findNumberIn2DArray2(matrix: number[][], target: number): boolean {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return false;
  }

  let rowIdx = 0;
  let columnIdx = matrix[0].length - 1;
  
  while (rowIdx < matrix.length && columnIdx >= 0) {
    const curNum = matrix[rowIdx][columnIdx];
    if (curNum === target) {
      return true;
    }
    if (curNum > target) {
      columnIdx--;
      continue;
    }
    rowIdx++;
  }

  // 没找到
  return false;
};