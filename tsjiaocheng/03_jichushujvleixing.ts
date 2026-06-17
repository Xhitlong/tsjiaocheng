export {};
console.log("=========03基础类型===========");
const studentName: string = "小王";
const age: number = 18;
const isStudent: boolean = true;
console.log("1)基础类型：", studentName, age, isStudent);

const score: number[] = [86, 90, 100];
const tags: Array<string> = ["前端", "Java", "Python"];
console.log("2)数组：", score, tags);
const userInfo: [string, number] = ["小李", 60];
console.log("3)元组：", userInfo);
enum Level { Low, Mid, High }
const currentLevel: Level = Level.Mid;
console.log("4)枚举：", currentLevel, Level[currentLevel]);

let id: string | number;
id = "123";
console.log("5)联合类型(字符串)：", id);
id = 999;
console.log("5)联合类型(数字)：", id);

let looseValue: any = "avcc";
console.log("6)any初始 ->:", looseValue);
looseValue = 123;
console.log("6)any赋值数字 ->:", looseValue);
let safeValue: unknown = "hello";
if (typeof safeValue === "string") {
    console.log("6)unknown长度：", safeValue.length);
}

function printLine(text: string): void {
    console.log("7)void函数：", text);
};
printLine("hello world");
let nickName: string | undefined = undefined;
let remark: string | null = null;
console.log("8)undefined：", nickName);
console.log("8)null：", remark);

const teacher: object = {
    name: "asda",
    course:"ts"
}
console.log("teacher", teacher);

const maybeText: unknown = "hello world";
const textLength: number = (maybeText as string).length;
console.log("10)类型断言：", textLength);

let resultText: "pass" | "fail" | "error";
resultText = "pass";
console.log("11)字面量类型：", resultText);

function fail(message: string): never {
    throw new Error(message);
}
console.log("12)never --- fail 函数已定义，调用后会直接报错");

interface Student {
    name: string;
    score: number;
}

function JudgeResult(score: number): "通过" | "挂科" {
    return score >= 60 ? "通过" : "挂科";
}
const stu: Student = {
    name: "小王as",
    score: 80
}
console.log("13) 综合案例：", `${stu.name}的成绩是${stu.score}：判断结果是${JudgeResult(stu.score)}`);
