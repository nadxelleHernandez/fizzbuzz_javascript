export const mystery = (text) => {
  if (!text) {
    return false;
  }
  const alphabetStr = 'abcdefghijklmnopqrstuvwxyz';
  if (text.length < alphabetStr.length) {
    return false;
  }

  const alphabet = {};
  for (let i = 0; i < alphabetStr.length; ++i) {
    alphabet[alphabetStr[i]] = false;
  }

  for (let i = 0; i < text.length; ++i) {
    let letter = text[i];
    if (alphabet[letter] != undefined) {
      alphabet[letter] = true;
    }
  }

  let hasAllLetters = true;
  for (const char of alphabetStr) {
    if (!alphabet[char]) {
      hasAllLetters = false;
      break;
    }
  }
  return hasAllLetters;
};
