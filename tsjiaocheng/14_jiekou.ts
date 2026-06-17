export { };
console.log("=======14 接口=======");
interface IPerson {
    firstName: string;
    lastName: string;
    sayHi: () => string;
}

let customer: IPerson = {
    firstName: "syxy",
    lastName: "shengbao",
    sayHi: (): string => "Helloasdadad"
};

console.log("1) 基础接口：", customer.firstName, customer.lastName, customer.sayHi());

interface RunOptions {
    program: string;
    commandline: string[] | string | (() => string);
}

let options: RunOptions = { program: 'text1', commandline: 'helllll' };
console.log("2) 联合类型：", options.program, options.commandline);
options = { program: 'text2', commandline: ['werwerwrwere', 'asdasdsdaas'] };
if (Array.isArray(options.commandline)) {
    console.log("2) 联合类型: ", options.program, options.commandline[0], options.commandline[1]);
}
options = { program: "text3", commandline: () => "text3" };
if (typeof options.commandline === "function") {
    let result = options.commandline();
    console.log("2) 联合类型: ", options.program, result);
}

interface NameList {
    [index: number]: string;
}
let names: NameList = ["qqqq", "wwwwwww", "eeeee"];
console.log("3) 数组: ", names[0], names[1], names[2]);
interface ages {
    [index: string]: number;
}
let agelist: ages = {};
agelist["runoob"] = 15;
agelist["google"] = 18;
console.log("4) 对象: ", agelist["runoob"], agelist["google"]);

interface Person {
    age: number;
}
interface Musian extends Person {
    instrument: string;
}
let drummer: Musian = { age: 27, instrument: "drums" };
console.log("5) 接口继承: ", drummer.age, drummer.instrument);