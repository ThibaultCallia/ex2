import Text from "./modules/Text.js";

const text1 = new Text("What a beautiful day todaaay YES YES YESS !");

console.log("Print text");
console.log(text1.str);

console.log("\nleft 3");
console.log(text1.left(3));

console.log("\nright 3");
console.log(text1.right(3));

console.log("\ncharcount");
console.log(text1.charCount());

console.log("\nwordcount");
console.log(text1.wordCount());

console.log("\nvowelcount");
console.log(text1.vowelCount());

console.log("\nCapitalcount");
console.log(text1.capitalCount());

console.log("\ntest David prepend and append");
console.log(
  new Text("een zin").prepend("Dit is ").append(" in het Nederlands.")
);
