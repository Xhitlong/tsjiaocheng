"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("=========03基础类型===========");
const studentName = "小王";
const age = 18;
const isStudent = true;
console.log("1)基础类型：", studentName, age, isStudent);
const score = [86, 90, 100];
const tags = ["前端", "Java", "Python"];
console.log("2)数组：", score, tags);
const userInfo = ["小李", 60];
console.log("3)元组：", userInfo);
var Level;
(function (Level) {
    Level[Level["Low"] = 0] = "Low";
    Level[Level["Mid"] = 1] = "Mid";
    Level[Level["High"] = 2] = "High";
})(Level || (Level = {}));
const currentLevel = Level.Mid;
console.log("4)枚举：", currentLevel, Level[currentLevel]);
let id;
id = "123";
console.log("5)联合类型(字符串)：", id);
id = 999;
console.log("5)联合类型(数字)：", id);
let looseValue = "avcc";
console.log("6)any初始 ->:", looseValue);
looseValue = 123;
console.log("6)any赋值数字 ->:", looseValue);
let safeValue = "hello";
if (typeof safeValue === "string") {
    console.log("6)unknown长度：", safeValue.length);
}
function printLine(text) {
    console.log("7)void函数：", text);
}
;
printLine("hello world");
let nickName = undefined;
let remark = null;
console.log("8)undefined：", nickName);
console.log("8)null：", remark);
const teacher = {
    name: "asda",
    course: "ts"
};
console.log("teacher", teacher);
const maybeText = "hello world";
const textLength = maybeText.length;
console.log("10)类型断言：", textLength);
let resultText;
resultText = "pass";
console.log("11)字面量类型：", resultText);
function fail(message) {
    throw new Error(message);
}
console.log("12)never --- fail 函数已定义，调用后会直接报错");
function JudgeResult(score) {
    return score >= 60 ? "通过" : "挂科";
}
const stu = {
    name: "小王as",
    score: 80
};
console.log("13) 综合案例：", `${stu.name}的成绩是${stu.score}：判断结果是${JudgeResult(stu.score)}`);
