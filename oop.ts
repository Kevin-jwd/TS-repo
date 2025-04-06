class Employee {
    constructor(
        private _empName: string,
        private _age: number,
        private _empJob: string
    ) {}

    get empName() {
        return this._empName;
    }

    get age() {
        return this._age;
    }

    get empJob() {
        return this._empJob;
    }

    set empName(empName: string) {
        this._empName = empName;
    }

    set age(age: number) {
        this._age = age;
    }

    set empJob(empJob: string) {
        this._empJob = empJob;
    }

    print(): void {
        console.log(`이름 : ${this._empName}`);
        console.log(`나이 : ${this._age}`);
        console.log(`직업 : ${this._empJob}`);
    }
}

const emp1 = new Employee("홍길동", 25, "개발자");
emp1.print();
