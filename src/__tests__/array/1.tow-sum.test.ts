import { twoSum1, twoSum2, twoSum3 } from '../../array/1.tow-sum';

type TestExp =  [number[], number, number[]];

const testList: TestExp[] = [
  [[2,7,11,15], 9, [0, 1]],
  [[3,2,4], 6, [1, 2]],
];

describe('两数字之和', () => {
  // 双层 for 循环
  describe('双层 for 循环', () => {
    test.each(testList)('(%o, %i): %o', (nums, target, res) => {
      expect(twoSum1(nums, target)).toEqual(res);
    });
  });

  // 使用 while 循环
  describe('使用 while 循环', () => {
    test.each(testList)('(%o, %i): %o', (nums, target, res) => {
      expect(twoSum2(nums, target)).toEqual(res);
    });
  });

  // 单层循环+借助辅助工具
  describe('单层循环+借助辅助工具', () => {
    test.each(testList)('(%o, %i): %o', (nums, target, res) => {
      expect(twoSum3(nums, target)).toEqual(res);
    });
  });
});