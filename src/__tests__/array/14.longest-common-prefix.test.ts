import { longestCommonPrefix, longestCommonPrefix1, longestCommonPrefix2 } from '../../array/14.longest-common-prefix';

type TestExp =  [string[], string];

const testList: TestExp[] = [
  [['flower','flow','flight'], 'fl'],
  [['dog','racecar','car'], ''],
  [['a'], 'a'],
];

describe('14.[Array]最长公共前缀', () => {
  // 双层 for 循环, 利用正则查找
  describe('双层 for 循环, 利用正则查找', () => {
    test.each(testList)('(%o): %s', (nums, res) => {
      expect(longestCommonPrefix(nums)).toBe(res);
    });
  });

  // 先排序, 利用 es6 数组的 every 找符合的
  describe('先排序, 利用 es6 数组的 every 找符合的', () => {
    test.each(testList)('(%o): %s', (nums, res) => {
      expect(longestCommonPrefix1(nums)).toBe(res);
    });
  });

  // 先排序, 利用 es6 数组的 some 找不符合的
  describe('先排序, 利用 es6 数组的 some 找不符合的', () => {
    test.each(testList)('(%o): %s', (nums, res) => {
      expect(longestCommonPrefix1(nums)).toBe(res);
    });
  });
});