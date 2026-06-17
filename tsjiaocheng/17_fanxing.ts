export{};
console.log("====17 泛型====");
function identity<T>(arg: T): T {
    return arg;
}
console.log("1) 泛型函数", identity<string>("Hello"));
console.log("1) 泛型函数", identity<number>(123));

interface Pair<T, U> {
    first: T;
    second: U;
}
let pair: Pair<string, number> = { first: "hhhhh", second: 55555 };
console.log("2) 泛型接口->", pair.first, pair.second);

class Box<T> {
    private value: T;
    constructor(value: T) {
        this.value = value;
    }
    getValue(): T {
        return this.value;
    }
}
let stringBox = new Box<string>("tstststs");
console.log("3) 泛型类->", stringBox.getValue());

interface Lengthwise {
    length: number;
}
function logLength<T extends Lengthwise>(arg: T): void {
    console.log("4) 泛型约束->", arg.length);
}
logLength("helloaaaaaaaa");

function defaultValue<T = string>(arg: T): T {
    return arg;
}
console.log("5) 泛型默认值->", defaultValue<number>(123123));
console.log("5) 泛型默认值->", defaultValue("Hel"));

