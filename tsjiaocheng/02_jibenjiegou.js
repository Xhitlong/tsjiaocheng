const projectTitle = "成绩判断示例";
const passScore = 60;
const s1 = { name: "张三", score: 86 };
const s2 = { name: "李四", score: 59 };
const students = [s1, s2];
function judge(student, line) {
    return student.score >= line ? "通过" : "未通过";
}
const formatResult = (student, result) => {
    return `${student.name}的成绩${student.score}:${result}`;
};
class ReportPrinter {
    constructor(title) {
        this.title = title;
    }
    printHeader() {
        console.log("项目: " + this.title);
    }
    printLine(text) {
        console.log("----------------------------------");
        console.log(text);
    }
}
const resultList = students.map((student) => {
    return judge(student, passScore);
});
const printer = new ReportPrinter(projectTitle);
printer.printHeader();
students.forEach((student, index) => {
    const line = formatResult(student, resultList[index]);
    printer.printLine(line);
});
