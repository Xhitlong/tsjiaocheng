console.log("1)程序从上而下进行执行");
console.log("先执行第一行");
console.log("再执行第二行");
console.log("\n2)变量与类型");

let age: number = 18;
age = 19;

console.log("age:", age);

const PI: number = 3.14;
const studentName: string = "张三";
const isStudent: boolean = true;

console.log("姓名:", studentName);
console.log("年龄:", + age);
console.log("是否为学生:", + isStudent);

console.log("\n3)基本运算");
const a: number = 10;
const b: number = 20;

console.log("a * b =" + a * b);
console.log("\n4)条件语句");

if (age >= 18) {
  console.log("已成年");
} else {
  console.log("未成年");
}
console.log("\n5)函数基础");

function add(x: number, y: number) {
    return x + y;
}
console.log("add(100,2000) =" + add(100,2000));

console.log("\n6)注释与分号");
console.log("//这是单行注释");

console.log("; 表示语句的结束");

console.log("\n7)大小写敏感");
const userName: string = "张三211";
const username: string = "李四25615";

console.log("userName = " + userName);
console.log("username = " + username);

console.log("\n8)类与对象");
class Site {
    name(): void {
        console.log("syxy");
    }
}
const siteObj: Site = new Site();
siteObj.name();
console.log("++++++++++++++++");