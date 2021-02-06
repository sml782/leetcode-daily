/**
 * 剑指 Offer 29. 顺时针打印矩阵
 * 
 * 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。
 * 
 * @example 示例 1：
 * 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * 输出：[1,2,3,6,9,8,7,4,5]
 * 
 * @example 示例 2：
 * 输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
 * 输出：[1,2,3,4,8,12,11,10,9,5,6,7]
 * 
 * 限制：
 * 0 <= matrix.length <= 100
 * 0 <= matrix[i].length <= 100
 */


/**
 * NOTE: 缓存
 * 
 * @export
 * @param {number[][]} matrix
 * @returns {number[]}
 */
export function spiralOrder(matrix: number[][]): number[] {
  type Direction = 'L' | 'R' | 'T' | 'B';
  const result: number[] = [];
  if (matrix.length === 0) {
    return result;
  }
  if (matrix.length === 1) {
    return matrix[0];
  }
  if (matrix[0].length === 0) {
    return result;
  }
  if (matrix[0].length === 1) {
    matrix.forEach((item) => {
      result.push(item[0]);
    });
    return result;
  }
  const curIdx = [0, 0]; // [row, column]
  let direction: Direction = 'R';
  let level = 0;
  const cacheList: Record<string, number> = {};
  while (true) {
    const [row, column] = curIdx;
    result.push(matrix[row][column]);
    cacheList[curIdx.toString()] = 1;
    switch (direction) {
      case 'L': {
        if (column > level) {
          curIdx[1]--;
          break;
        }
        direction = 'T';
        curIdx[0]--;
        break;
      }

      case 'R': {
        if (column < matrix[0].length - level - 1) {
          curIdx[1]++;
          break;
        }
        direction = 'B';
        curIdx[0]++;
        break;
      }

      case 'T': {
        if (row > level + 1) {
          curIdx[0]--;
          break;
        }
        direction = 'R';
        level++;
        curIdx[1]++;
        break;
      }

      case 'B': {
        if (row < matrix.length - level - 1) {
          curIdx[0]++;
          break;
        }
        direction = 'L';
        curIdx[1]--;
        break;
      }

      default: break;
    }
    if (cacheList[curIdx.toString()]) {
      return result;
    }
  }
};
