export {};

console.log("========09_string==========")
let strLiteral: string = "hello world";
let strObject: String = new String("hello world");
console.log("1) typeof strLiteral: ", typeof strLiteral);
console.log("2) typeof strObject: ", typeof strObject);

console.log("3) === 比较：", strLiteral === strObject);
console.log("4) == 比较：", strLiteral == strObject);
console.log("5) valueOf 后比较", strLiteral == strObject.valueOf());
console.log("6 length: ", strObject.length)

let str: string = "hellosyxysyxysyxy";

console.log("7) charAt(8): ", str.charAt(8));
console.log("8) indexOf('syxy'): ", str.indexOf('syxy'));
console.log("9) substring(5,10): ", str.substring(5,10));
console.log("10) slice(5,8): ", str.slice(5,10));
let str1 = "Apples are round, and apples are juicy.";
let splitted = str1.split("p", 3);
console.log(splitted, "+++++++++++++");

let siteName: string = "sbxy";
console.log("11) concat -> ","asd".concat(siteName));
console.log("12) replace: ", "qqq".replace(/(\w+)\s(\w+)/, "$2 $1"));
console.log("13) toString: ", siteName.toString());
console.log("14) toUpperCase: ", siteName.toUpperCase());
