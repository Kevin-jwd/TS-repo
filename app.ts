enum Gender {
    Male = "male",
    Female = "female",
}

interface Student {
    stdId: number;
    stdName: string;
    age: number;
    gender: "male" | "female";
    course: string;
    completed: boolean;
    setName: (name: string) => void;
}

class MyStudent implements Student {
    stdId: number;
    stdName: string;
    age: number;
    gender: "male";
    course: string;
    completed: boolean;

    constructor() {
        this.stdId = 999999;
        this.stdName = "kim";
        this.age = 20;
        this.gender = Gender.Male;
        this.course = "Type";
        this.completed = true;
    }

    setName(name: string): void {
        this.stdName = name;
        console.log("이름 설정 완료: " + this.stdName);
    }
}

const myInstance = new MyStudent();
myInstance.setName("do");

let numStr: number | string = "100";

function convertToString(val: number | string) {
    return String(val);
}

function convertToNumber(val: number | string) {
    return Number(val);
}

console.log(convertToString(numStr))
console.log(convertToNumber(numStr))