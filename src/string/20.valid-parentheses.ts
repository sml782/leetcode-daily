/**
 * 20. 有效地括号
 * 
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
 * 有效字符串需满足：
 *   1.左括号必须用相同类型的右括号闭合。
 *   2.左括号必须以正确的顺序闭合。
 * 
 * @example 1
 * 输入：s = "()"
 * 输出：true
 * 
 * @example 2
 * 输入：s = "()[]{}"
 * 输出：true
 * 
 * @example 3
 * 输入：s = "(]"
 * 输出：false
 * 
 * @example 4
 * 输入：s = "([)]"
 * 输出：false
 * 
 * @example 5
 * 输入：s = "{[]}"
 * 输出：true
 * 
 * @tip
 * 1 <= s.length <= 10^4
 * s 仅由括号 '()[]{}' 组成
 * 
 * @see https://leetcode-cn.com/problems/valid-parentheses/
 */

export function isValid(s: string): boolean {
  if (s.length % 2 !== 0) {
    return false;
  }

  const bracketMap = new Map<string, string>(
    [
      [')', '('],
      [']', '['],
      ['}', '{'],
    ]
  );

  let sIndex = 0;
  const stack: string[] = [];

  while (sIndex < s.length) {
    const brk = s.charAt(sIndex);
    if (bracketMap.has(brk)) {
      if (stack.length === 0 || stack[stack.length - 1] !== bracketMap.get(brk)) {
        return false;
      }
      stack.pop();
    } else {
      stack.push(brk);
    }

    sIndex++;
  }

  return stack.length === 0;
};