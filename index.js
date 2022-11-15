import Text from "./modules/Text.js";

const text1 = new Text("Test");

console.log(text1);
console.log(text1.left(3));
console.log(text1.right(3));
console.log(text1.charCount());
console.log(text1.wordCount());
console.log(text1.vowelCount());
console.log(text1.capitalCount());
console.log(text1.append("nog een test"));
console.log(text1.prepend("nog een test"));
console.log(text1.prepend("12").append("645"));
