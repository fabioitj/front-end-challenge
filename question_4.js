function isValidBrackets(str) {
    const stack = [];
    const bracketsMap = {
      '(': ')',
      '{': '}',
      '[': ']'
    };
  
    for (const char of str) {
      if (bracketsMap[char]) {
        stack.push(char);
      } else {
        const lastBracket = stack.pop();
        if (bracketsMap[lastBracket] !== char) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  }
  
  console.log(isValidBrackets("{[]}"));
  console.log(isValidBrackets("{(])}"));
  console.log(isValidBrackets("{([)]}"));  