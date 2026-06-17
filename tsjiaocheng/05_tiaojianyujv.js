"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("====== 条件语句 ======");
let age = 20;
if (age >= 18) {
    console.log("1) if -> 已成年");
}
let score = 600;
if (score >= 50) {
    console.log("2) if else -> 通过");
}
else {
    console.log("2) if else -> 未通过");
}
let num = 0;
if (num > 0) {
    console.log("3) 正数");
}
else if (num === 0) {
    console.log("3) 零");
}
else {
    console.log("3) 负数");
}
let grade = "r";
switch (grade) {
    case "A":
        console.log("4) switch -> 优秀");
        break;
    case "B":
        console.log("4) switch -> 良好");
        break;
    case "C":
        console.log("4) switch -> 中等");
        break;
    default:
        console.log("4) switch -> 不及格");
        break;
}
console.log("====== 条件语句结束 ======");
