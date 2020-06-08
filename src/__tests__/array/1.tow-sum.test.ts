import { twoSumFor1 } from '../../array/1.tow-sum';

interface TestExp {
  input: [number[], number];
  output: number[];
}

const testList: TestExp[] = [
  {
    input: [[2,7,11,15], 9],
    output: [0, 1],
  },
];

describe('两数字之和', () => {
  test('双层 for 循环', () => {
    testList.forEach(({ input, output }) => {
      expect(twoSumFor1(...input)).toEqual(output);
    });
  });
});