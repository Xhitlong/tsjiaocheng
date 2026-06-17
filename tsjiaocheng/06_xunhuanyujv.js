"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("====== 06循环语句 ======");
let total = 0;
for (let i = 1; i <= 3; i++) {
    total += i;
}
console.log("1) for循环 ->", total);
let count = 2;
while (count > 0) {
    console.log("2) while循环 ->", count);
    count--;
}
let num = 0;
do {
    console.log("3) do-while循环 ->", num);
    num++;
} while (num < 2);
let user = { name: "sada", age: 20 };
for (let key in user) {
    console.log("4) for-in循环 ->", key, user[key]);
}
let courseList = ["Java", "Python", "C++"];
for (let course of courseList) {
    console.log("4) for-of ->", course);
}
let numList = [1, 2, 3, 4, 5];
numList.forEach((item) => {
    console.log("5) forEach ->", item);
});
let everyResult = numList.every((item) => item > 0);
console.log("5) every ->", everyResult);
let someResult = numList.some((item) => {
    return item > 3;
});
console.log("5) some ->", someResult);
for (let n = 1; n <= 5; n++) {
    if (n === 2) {
        continue;
    }
    if (n === 4) {
        break;
    }
    console.log("6) break和continue ->", n);
}
console.log("====== 本章结束 ======");
