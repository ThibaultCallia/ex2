export function containsAnyLetters(str) {
  return /[a-zA-Z]/.test(str);
}

export function isVowel(x) {
  return "aeiouAEIOU".indexOf(x) != -1;
}
