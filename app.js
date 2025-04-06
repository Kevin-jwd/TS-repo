"use strict";
var Gender;
(function (Gender) {
    Gender["Male"] = "male";
    Gender["Female"] = "female";
})(Gender || (Gender = {}));
class MyStudent {
    constructor() {
        this.stdId = 999999;
        this.stdName = "kim";
        this.age = 20;
        this.gender = Gender.Male;
        this.course = "Type";
        this.completed = true;
    }
    setName(name) {
        this.stdName = name;
        console.log("이름 설정 완료: " + this.stdName);
    }
}
const myInstance = new MyStudent();
myInstance.setName("do");
let numStr = "100";
function convertToString(val) {
    return String(val);
}
function convertToNumber(val) {
    return Number(val);
}
console.log(convertToString(numStr));
console.log(convertToNumber(numStr));
