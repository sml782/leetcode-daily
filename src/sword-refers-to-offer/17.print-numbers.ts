/**
 * 剑指 Offer 17. 打印从1到最大的n位数
 * 
 * 输入数字 n，按顺序打印出从 1 到最大的 n 位十进制数。
 * 比如输入 3，则打印出 1、2、3 一直到最大的 3 位数 999。
 * 
 * @example 示例 1:
 * 输入: n = 1
 * 输出: [1,2,3,4,5,6,7,8,9]
 * 
 * 说明：
 * 用返回一个整数列表来代替打印
 * n 为正整数
 */


export function printNumbers(n: number): number[] {
  const arrLen = 10 ** n - 1;
  const arr: number[] = new Array(arrLen);

  const midIdx = Math.floor(arrLen / 2);
  let curIdx = midIdx - 1;
  arr[midIdx] = midIdx + 1;
  while (curIdx >= 0) {
    arr[curIdx] = curIdx + 1;
    const mapIdx = arrLen - 1 - curIdx;
    arr[mapIdx] = mapIdx + 1;
    curIdx--;
  }

  return arr;
};