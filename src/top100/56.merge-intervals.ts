/**
 * 56.合并区间
 * 
 * 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。
 * 请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。
 * 
 * @example 1
 * 输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
 * 输出：[[1,6],[8,10],[15,18]]
 * 解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
 * 
 * @example 2
 * 输入：intervals = [[1,4],[4,5]]
 * 输出：[[1,5]]
 * 解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。
 * 
 * @tip
 * 1 <= intervals.length <= 10^4
 * intervals[i].length == 2
 * 0 <= starti <= endi <= 10^4
 * 
 * @see https://leetcode-cn.com/problems/merge-intervals/
 */

// export function merge(intervals: number[][]): number[][] {
//   if (intervals.length < 2) {
//     return intervals;
//   }

//   intervals.sort((a, b) => a[0] - b[0]);

//   let index = 1;
//   let prevItem = intervals[0];
//   while (index < intervals.length) {
//     const currentItem = intervals[index];

//     if (!prevItem || !currentItem) {
//       return intervals;
//     }

//     if (prevItem[1] < currentItem[0]) {
//       prevItem = currentItem;
//       index++;
//       continue;
//     }

//     prevItem[1] = Math.max(prevItem[1], currentItem[1]);
//     intervals.splice(index, 1);
//   }

//   return intervals;
// };

export function merge(intervals: number[][]): number[][] {
  if (intervals.length < 2) {
    return intervals;
  }

  intervals.sort((a, b) => a[0] - b[0]);

  const result: number[][] = Array.from({ length: intervals.length });
  let index = 1;
  let prevItem = intervals[0];
  while (index < intervals.length) {
    const currentItem = intervals[index];
    index++;

    if (prevItem[1] < currentItem[0]) {
      result.push(prevItem);
      prevItem = currentItem;
      continue;
    }

    prevItem[1] = Math.max(prevItem[1], currentItem[1]);
  }

  result.push(prevItem);

  return result;
};