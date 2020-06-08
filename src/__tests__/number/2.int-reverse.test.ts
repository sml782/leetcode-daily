import { reverse } from '../../number/2.int-reverse';

type TestExp =  [number, number];

const testList: TestExp[] = [
  [123, 321],
  [-123, -321],
  [120, 21],
];

describe('整数反转', () => {
  // 通过 string + []
  describe('通过 string + []', () => {
    test.each(testList)('(%i): %i', (x, res) => {
      expect(reverse(x)).toEqual(res);
    });
  });
});