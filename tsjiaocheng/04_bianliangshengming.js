"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("===04 变量声明 =====");
let userName = "syxy";
let user_age = 18;
let $coursName = "ts";
console.log("1) 命名规则 ->", userName, user_age, $coursName);
console.log("2: 变量声明的方式： ++++++++++");
let siteTitle = "百度";
let siteTitle2;
let siteTitle3 = "百度1";
let siteTitle4;
console.log("2) 变量声明的方式：", siteTitle, siteTitle2, siteTitle3, siteTitle4);
console.log("3: 综合例子： ++++++++++");
let studentLabel = "小红";
let score1 = 80;
let score2 = 90;
let sum = score1 + score2;
console.log("3) 综合例子：", studentLabel, score1, score2, sum);
console.log("4: 类型断言： ++++++++++");
let textValue = "123";
let assertedText = textValue;
let assertedText2 = textValue;
let realNumber = Number(assertedText2);
console.log("4) 类型断言：", assertedText, assertedText2, realNumber);
console.log("类型：", typeof assertedText, typeof assertedText2, typeof realNumber);
console.log("++++++++++++++++++++");
console.log("5.变量作用+++++++++++++++++");
let globalNum = 12;
class NumbersDemo {
    constructor() {
        this.numVal = 13;
    }
    storeNum() {
        let localNum = 999;
        console.log("局部变量：", localNum);
    }
}
NumbersDemo.staticNum = 1411;
console.log("全局变量：", globalNum);
console.log("静态变量：", NumbersDemo.staticNum);
let demo = new NumbersDemo();
console.log("实例变量：", demo.numVal);
// demo.storeNum();
console.log("===本章结束=======");
