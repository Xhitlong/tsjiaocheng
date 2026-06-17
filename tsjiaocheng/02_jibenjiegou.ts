const projectTitle: string = "成绩判断示例";
const passScore: number = 60;

interface Named {
    name: string;
}

type Student = Named & {
    score: number;
}

type JudgeResult = "通过" | "未通过";

const s1: Student = { name: "张三", score: 86};
const s2: Student = { name: "李四", score: 59};
const students: Student[] = [s1, s2];

function judge(student: Student, line: number): JudgeResult {
    return student.score >= line ? "通过" : "未通过";
}

const formatResult = (student: Student, result: JudgeResult): string => {
    return `${student.name}的成绩${student.score}:${result}`;
}

class ReportPrinter {
    constructor(private title: string) {}

    printHeader(): void {
        console.log("项目: " + this.title);
    }
    printLine(text: string): void {
        console.log("----------------------------------");
        console.log(text);
    }
}

const resultList: JudgeResult[] = students.map((student) => {
    return judge(student, passScore);
});

const printer = new ReportPrinter(projectTitle);
printer.printHeader();
students.forEach((student, index) => {
    const line = formatResult(student, resultList[index]);
    printer.printLine(line);
});

