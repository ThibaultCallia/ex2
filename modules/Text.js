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
  wordCount() {
    return this.str.split(" ").length;
  }
  vowelCount() {
    return [...this.str].filter((char) =>
      ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"].includes(char)
    ).length;
  }
  capitalCount() {
    return [...this.str]
      .filter((char) => char.toUpperCase() === char)
      .filter((element) => element.match(/[a-zA-Z]/)).length;
  }
  append(string) {
    const newStr = this.str.concat(string);
    return new Text(newStr);
  }

  prepend(string) {
    const newStr = string.concat(this.str);
    return new Text(newStr);
  }
}

export default Text;
