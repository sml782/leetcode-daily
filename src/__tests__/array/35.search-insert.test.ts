import { searchInsert, searchInsert1 } from '../../array/35.search-insert';

type TestExp =  [number[], number, number];

const testList: TestExp[] = [
  [[1,3,5,6], 5, 2],
  [[1,3,5,6], 2, 1],
  [[1,3,5,6], 7, 4],
  [[1,3,5,6], 0, 0],
];

describe('35.[Array]搜索插入位置', () => {
  // 暴力循环查找
  describe('暴力循环查找', () => {
    test.each(testList)('(%o, %i): %i', (nums, val, res) => {
      expect(searchInsert(nums, val)).toBe(res);
    });
  });

  // 二分查找
  describe('二分查找', () => {
    test.each(testList)('(%o, %i): %i', (nums, val, res) => {
      expect(searchInsert1(nums, val)).toBe(res);
    });
  });
});