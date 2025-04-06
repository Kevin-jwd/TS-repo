"use strict";
class Employee {
    constructor(_empName, _age, _empJob) {
        this._empName = _empName;
        this._age = _age;
        this._empJob = _empJob;
    }
    get empName() {
        return this._empName;
    }
    get age() {
        return this._age;
    }
    get empJob() {
        return this._empJob;
    }
    set empName(empName) {
        this._empName = empName;
    }
    set age(age) {
        this._age = age;
    }
    set empJob(empJob) {
        this._empJob = empJob;
    }
    print() {
        console.log(`이름 : ${this._empName}`);
        console.log(`나이 : ${this._age}`);
        console.log(`직업 : ${this._empJob}`);
    }
}
const emp1 = new Employee("홍길동", 25, "개발자");
emp1.print();
