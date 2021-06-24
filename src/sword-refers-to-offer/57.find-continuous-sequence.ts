/**
 * 剑指 Offer 57 - II. 和为s的连续正数序列
 * 
 * 输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。
 * 序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。
 * 
 * @example 示例1
 * 输入：target = 9
 * 输出：[[2,3,4],[4,5]]
 * 
 * @example 示例2
 * 输入：target = 15
 * 输出：[[1,2,3,4,5],[4,5,6],[7,8]]
 * 
 * @limit 1 <= target <= 10^5
 */


/**
 * 滑动窗口求解
 *
 * @export
 * @param {number} target
 * @returns {number[][]}
 */
export function findContinuousSequence(target: number): number[][] {
  const sequences: number[][] = [];

  let startKey = 1;

  function getSequence(): [number[], number | undefined] {
    const sequence: number[] = [startKey];
    let nextKey = startKey + 1;
    let total = startKey;
  
    while (true) {
      if (total === 0 || total === target) {
        break;
      }
      if (total + nextKey > target) {
        const delKey = sequence.shift();
        if (delKey) {
          total -= delKey;
        }
        continue;
      }
      total += nextKey;
      sequence.push(nextKey);
      nextKey++;
    }

    return [sequence, sequence[0]];
  }

  while (true) {
    const [s, skey] = getSequence();
    if (!skey || skey + skey + 1 > target) {
      break;
    }
    sequences.push(s);
    startKey = skey + 1;
  }

  return sequences;
};