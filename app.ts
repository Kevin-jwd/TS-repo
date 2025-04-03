enum Gender {
    Male = "male",
    Female = "female",
}

interface Student {
    stdId: number;
    stdName: string;
    age: number;
    gender: Gender;
    course: string;
    completed: boolean;
    setName: (name: string) => void;
}

class MyStudent implements Student {
    stdId: number;
    stdName: string;
    age: number;
    gender: Gender;
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
