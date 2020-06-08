import { findMedianSortedArrays, findMedianSortedArrays1 } from '../../array/4.find-median-sorted-arrays';

type TestExp = [number[], number[], number];

const testList: TestExp[] = [
  [[1, 3], [2], 2],
  [[1, 2], [3, 4], 2.5],
];

describe('寻找两个正序数组的中位数', () => {
  test.each(testList)('(%o, %o): %i', (num1, num2, res) => {
    expect(findMedianSortedArrays(num1, num2)).toBe(res);
  });

  test.each(testList)('(%o, %o): %i', (num1, num2, res) => {
    expect(findMedianSortedArrays1(num1, num2)).toBe(res);
  });
});