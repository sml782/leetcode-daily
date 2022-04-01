/**
 * 17.电话号码的字母组合
 * 
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。
 * 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 * 
 * @example 1
 * 输入：digits = "23"
 * 输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
 * 
 * @example 2
 * 输入：digits = ""]
 * 输出：[]
 * 
 * @example 3
 * 输入：digits = "2"
 * 输出：["a","b","c"]
 * 
 * @tip
 * 0 <= digits.length <= 4
 * digits[i] 是范围 ['2', '9'] 的一个数字。
 * 
 * @see https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
 */

export function letterCombinations(digits: string): string[] {
  if (digits.length === 0) {
    return [];
  }

  const digitsMap: Record<string, string[]> = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
  };

  let result: string[] = [];

  for (let i = 0; i < digits.length; i++) {
    const curList = digitsMap[digits.charAt(i)];
    
    if (i === 0) {
      result = [...curList];
      continue;
    }

    const newResult: string[] = [];
    for (const item of result) {
      for (const curItem of curList) {
        newResult.push(`${item}${curItem}`);
      }
    }

    result = newResult;
  }

  return result;
};