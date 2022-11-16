import { containsAnyLetters, isVowel } from "./helper.js";

class Text {
  str;

  constructor(string) {
    this.str = string;
  }

  left(number) {
    return this.str.slice(0, number);
  }
  right(number) {
    return this.str.slice(-number);
  }
  charCount() {
    return this.str.length;
  }
  //   Accounting for text input mistakes such as "This is a test ." instead of "This is a test."
  wordCount() {
    return this.str.split(" ").filter((element) => containsAnyLetters(element))
      .length;
  }
  vowelCount() {
    return [...this.str].filter((char) => isVowel(char)).length;
  }
  capitalCount() {
    return [...this.str]
      .filter((char) => char.toUpperCase() === char)
      .filter((element) => element.match(/[a-zA-Z]/)).length;
  }
  append(string) {
    return new Text(this.str.concat(string));
  }

  prepend(string) {
    return new Text(string.concat(this.str));
  }
}

export default Text;
