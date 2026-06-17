export{}
console.log("=======12 元组=======");
let mytuple: [number, string] = [42, "hello"];
console.log("1) mytuple: ", mytuple);

let mytuple2: [number, string, boolean] = [55, "asdads", true];
console.log("2) mytuple2: ", mytuple2[0], mytuple2[1], mytuple2[2]);

console.log("3) mytuple2更新前: ", mytuple2[0]);
mytuple2[0] = 989898;
console.log("3) mytuple2更新后: ", mytuple2[0]);

let mytuple3: [number, string, boolean] = [4221, "hesadads",false];
console.log("4) mytuple3: ", mytuple3.length);
mytuple3.push("qwqwqw");
console.log("4) mytuple3push之后: ", mytuple3);
let lastElE = mytuple3.pop();
console.log("4) mytuple3pop之后: ", mytuple3, lastElE);

let a: [number, string, boolean] = [1, "helloasdsa", true];
let [b,c] = a;
console.log("5) a: ", a, "b: ", b, "c: ", c);

function getUserInfo(): [number, string] {
    return [422222, "helladsadao"];
}
const [userId, userName] = getUserInfo();
console.log("6) 返回元组：userId: ", userId,"username: ", userName);