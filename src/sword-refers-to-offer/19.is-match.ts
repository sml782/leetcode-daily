/**
 * 剑指 Offer 19. 正则表达式匹配
 * 
 * 请实现一个函数用来匹配包含'. '和'*'的正则表达式。
 * 模式中的字符'.'表示任意一个字符，而'*'表示它前面的字符可以出现任意次（含0次）。
 * 在本题中，匹配是指字符串的所有字符匹配整个模式。
 * 例如，字符串"aaa"与模式"a.a"和"ab*ac*a"匹配，但与"aa.a"和"ab*a"均不匹配。
 * 
 * @example 示例 1:
 * 输入:
 * s = "aa"
 * p = "a"
 * 输出: false
 * 解释: "a" 无法匹配 "aa" 整个字符串。
 * 
 * @example 示例 2:
 * 输入:
 * s = "aa"
 * p = "a*"
 * 输出: true
 * 解释: 因为 '*' 代表可以匹配零个或多个前面的那一个元素, 在这里前面的元素就是 'a'。
 * 因此，字符串 "aa" 可被视为 'a' 重复了一次。
 * 
 * @example 示例 3:
 * 输入:
 * s = "ab"
 * p = ".*"
 * 输出: true
 * 解释: ".*" 表示可匹配零个或多个（'*'）任意字符（'.'）。
 * 
 * @example 示例 4:
 * 输入:
 * s = "aab"
 * p = "c*a*b"
 * 输出: true
 * 解释: 因为 '*' 表示零个或多个，这里 'c' 为 0 个, 'a' 被重复一次。因此可以匹配字符串 "aab"。
 * 
 * @example 示例 5:
 * 输入:
 * s = "mississippi"
 * p = "mis*is*p*."
 * 输出: false
 * 
 * s 可能为空，且只包含从 a-z 的小写字母。
 * p 可能为空，且只包含从 a-z 的小写字母以及字符 . 和 *，无连续的 '*'。
 */


/**
 * NOTE: 暴力正则
 * 
 * @export
 * @param {string} s 要匹配的字符串
 * @param {string} p 模拟正则
 * @returns {boolean}
 */
export function isMatch(s: string, p: string): boolean {
  if (s === p) {
    return true;
  }
  if (!s && !p) {
    return true;
  }
  const regx = new RegExp(`^${p}$`);
  return regx.test(s);
};

// export function isMatch1(s: string, p: string): boolean {
//   if (s === p) {
//     return true;
//   }
//   if (!s && !p) {
//     return true;
//   }

//   let sIdx = 0;
//   let pIdx = 0;

//   function searchNext(singleStr = '', isMulti = false): boolean {
//     const isMatch = singleStr === '.' ? true : singleStr === s[sIdx];
    
//     if (!isMatch) {
//       return isMatch;
//     }

//     if (!isMulti) {
//       sIdx++;
//     } else {
//       let idx = 0;
//       while (sIdx + idx < s.length) {
//         if (s[sIdx + idx] !== s[sIdx]) {
//           break;
//         }
//         idx++;
//       }
//       sIdx += (idx - 1);
//     }

//     return isMatch;
//   }

//   while (pIdx < p.length) {
//     const isMulti = p[pIdx + 1] === '*';
//     pIdx += isMulti ? 2 : 1;
//     const matched = searchNext(p[pIdx], isMulti);
//     if (matched) {
//       continue;
//     }
//     return false;
//   }
//   return true;
// };