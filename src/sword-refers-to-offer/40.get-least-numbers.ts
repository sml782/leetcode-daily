/**
 * 剑指 Offer 40. 最小的k个数
 * 
 * 输入整数数组 arr ，找出其中最小的 k 个数。
 * 例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。
 * 
 * @example 示例 1：
 * 输入：arr = [3,2,1], k = 2
 * 输出：[1,2] 或者 [2,1]
 * 
 * @example 示例 2：
 * 输入：arr = [0,1,2,1], k = 1
 * 输出：[0]
 * 
 * @limit
 * 0 <= k <= arr.length <= 10000
 * 0 <= arr[i] <= 10000
 * 
 * @see https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/
 */


/**
 * NOTE: 排序 + 取
 *
 * @export
 * @param {number[]} arr
 * @param {number} k
 * @returns {number[]}
 */
export function getLeastNumbers(arr: number[], k: number): number[] {
  if (arr.length === 0 || k === 0) {
    return [];
  }
  if (arr.length <= k) {
    return arr;
  }
  arr.sort((a, b) => a - b);
  return arr.slice(0, k);
};


function quickSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }
  const midIndex = Math.floor(arr.length / 2);
  const midItem = arr.splice(midIndex, 1)[0];
  const leftArr: number[] = [];
  const rightArr: number[] = [];
  arr.forEach((item) => {
    if (item > midItem) {
      rightArr.push(item);
      return;
    }
    leftArr.push(item);
  });
  return [...quickSort(leftArr), midItem, ...quickSort(rightArr)];
}

/**
 * NOTE: 快排排序 + 取
 *
 * @export
 * @param {number[]} arr
 * @param {number} k
 * @returns {number[]}
 */
export function getLeastNumbers1(arr: number[], k: number): number[] {
  if (arr.length === 0 || k === 0) {
    return [];
  }
  if (arr.length <= k) {
    return arr;
  }
  return quickSort(arr).slice(0, k);
};