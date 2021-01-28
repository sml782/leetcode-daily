/**
 * 剑指 Offer 20. 表示数值的字符串
 * 
 * 请实现一个函数用来判断字符串是否表示数值（包括整数和小数）。
 * 例如，字符串"+100"、"5e2"、"-123"、"3.1416"、"-1E-16"、"0123"都表示数值，
 * 但"12e"、"1a3.14"、"1.2.3"、"+-5"及"12e+5.4"都不是。
 */


export function isNumber(s: string): boolean {
  s = s.trim().toLocaleLowerCase();
  if (!s) {
    return false;
  }
  if (s.length === 1) {
    if (!/\d/.test(s)) {
      return false;
    }
  } else {
    if (
      !/\d/g.test(s)
      ||
      s.startsWith('e')
      ||
      s.endsWith('e')
      ||
      s.endsWith('+')
      ||
      s.endsWith('-')
    ) {
      return false;
    }
  }

  function validNum(num: string, step = 0): boolean {
    if (!num) {
      return false;
    }
    const memo: Record<string, number[]> = {
      '.': [],
      '+|-': [],
    };
    let index = 0;
    while (index < num.length) {
      const currentStr = num[index];
      if (/[a-z]/.test(currentStr)) {
        return false;
      }
      switch (currentStr) {
        case '.': {
          if (step > 0 && index === 0) {
            return false;
          }
          if (memo[currentStr].length >= 1) {
            return false;
          }
          if (index > 0 && !/\d/.test(num[index - 1])) {
            return false;
          }
          if (!/\d/.test(num[index + 1])) {
            return false;
          }
          memo[currentStr].push(index);
          break;
        }
  
        case '+':
        case '-':
        {
          if (index > 0 && !/e|\.|\+|-/.test(num[index - 1])) {
            return false;
          }
          if (/e/.test(num[index + 1])) {
            return false;
          }
          memo['+|-'].push(index);
          break;
        }
  
        default:
          if (!/\d|[a-z]|\+|-|\./.test(currentStr)) {
            return false;
          }
          break;
      }
      index++;
    }
    return true;
  }

  const numList: string[] = s.split('e');
  // e 大于 1 个了
  if (numList.length > 2) {
    return false;
  }

  let idx = 0;
  while (idx < numList.length) {
    if (!validNum(numList[idx], idx)) {
      return false;
    }
    idx++;
  }
  
  return true;
};