export{}
console.log("=======13 联合类型=======");

let val:string | number;
val = "hello world";
console.log("1) 字符串为: ", + val);
val = 123456;
console.log("2) 数字为: ", + val);

function disp(name:string | string[]): void {
  if (typeof name === "string") {
    console.log("2) 字符串参数: ", name);
  } else {
    for (let i = 0; i < name.length; i++) {
      console.log("2) 数组参数: ", name[i]);
    }
  }
}
disp("syxy");
disp(["Runoob", "Google", "Taobao111"]); 

let arr: number[] | string[];
arr = [1, 2, 3, 4];
console.log("3) 数字数组为: ", arr);
arr = ["asdad", "asdadasasad", "qweqeqwedad"];
console.log("3) 字符串数组为: ", arr);
console.log("===========本章结束===========");
