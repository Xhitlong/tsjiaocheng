export {};
console.log("===04 变量声明 =====");
let userName: string = "syxy";
let user_age: number = 18;
let $coursName: string = "ts";

console.log("1) 命名规则 ->", userName, user_age, $coursName);

console.log("2: 变量声明的方式： ++++++++++");
let siteTitle: string = "百度";
let siteTitle2: string;
let siteTitle3: string = "百度1";
let siteTitle4;
console.log("2) 变量声明的方式：", siteTitle, siteTitle2, siteTitle3, siteTitle4);

console.log("3: 综合例子： ++++++++++");
let studentLabel: string = "小红";
let score1: number = 80;
let score2: number = 90;
let sum = score1 + score2;
console.log("3) 综合例子：", studentLabel, score1, score2, sum);

console.log("4: 类型断言： ++++++++++");
let textValue: any = "123";
let assertedText: string = <string>textValue;
let assertedText2: string = textValue as string;
let realNumber: number = Number(assertedText2);
console.log("4) 类型断言：", assertedText, assertedText2, realNumber);
console.log("类型：", typeof assertedText, typeof assertedText2, typeof realNumber);
console.log("++++++++++++++++++++");

console.log("5.变量作用+++++++++++++++++");
let globalNum: number = 12;
class NumbersDemo{
    numVal: number = 13;
    static staticNum: number = 1411;
    storeNum(): void{
        let localNum: number = 999;
        console.log("局部变量：",localNum);
    }
}
console.log("全局变量：", globalNum);
console.log("静态变量：", NumbersDemo.staticNum);

let demo: NumbersDemo = new NumbersDemo();
console.log("实例变量：", demo.numVal);
// demo.storeNum();
console.log("===本章结束=======");
