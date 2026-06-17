"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("======07 函数 ======");
function add(x, y) {
    return x + y;
}
console.log("1) 函数调用 ->", add(2, 5));
let greet = function (name) {
    return "你好，" + name;
};
console.log("2) 匿名函数 ->", greet("syxy"));
function buildName(firstName, lastName) {
    if (lastName) {
        return firstName + " " + lastName;
    }
    return firstName;
}
console.log("3) 可选参数 ->", buildName("syxy"));
console.log("3) 可选参数 ->", buildName("syxy", "2005"));
function sayHello(name = "同学") {
    return "你好" + name;
}
;
console.log("4) 默认参数 ->", sayHello());
function calculate_discount(price, rate = 0.5) {
    let discount = price * rate;
    console.log("4) 计算结果 ->", discount);
}
calculate_discount(1000);
calculate_discount(1000, 0.3);
function totalScore(...scores) {
    let total = 0;
    for (let score of scores) {
        total += score;
    }
    return total;
}
console.log("5) 剩余参数 ->", totalScore(80, 80, 666));
let myFunction = new Function("a", "b", "return a * b");
console.log("6) 构造函数 ->", myFunction(2, 20));
function factorial(num) {
    if (num <= 0) {
        return 1;
    }
    return num * factorial(num - 1);
}
console.log("7) 递归函数 ->", factorial(10));
let foo = (x) => {
    return x * 7;
};
console.log("8) 箭头函数 ->", foo(10));
let foo1 = (x) => 10 + x;
console.log("8) 箭头函数 ->", foo1(10));
(function () {
    console.log("9) 自调用函数 ->", "helloooooo");
})();
function show(a, b) {
    console.log("10) 重载函数 ->", a, b);
}
show("hello11");
show(10, 20);
function disp(x, y) {
    console.log(x);
    console.log(y);
}
disp("abc");
disp(1, "xyz");
console.log("======== 本章结束 =======");
