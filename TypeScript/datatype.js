"use strict";
// let fname = 'tejas'
// fname= 10
Object.defineProperty(exports, "__esModule", { value: true });
// ** String **
let myName;
myName = "tejas";
let updateName = myName.toUpperCase();
console.log(updateName);
//  ** Number **
let age;
age = 18.4;
let dob = "25";
// typecasting
let res = parseInt(dob);
// console.log(res);
// console.log(age);
// ** Boolean **
let isActive = false;
// console.log(isActive);
// ** Array **
// generic way to define array
let namesList;
let emp;
emp = ["Tejas", "Vikas", "Tweet"];
let resEmp = emp.find((nameof) => nameof === "Tejas");
// console.log(resEmp);
let numlist;
numlist = [1, 2, 34, 5, 5];
let newNum = numlist[5];
// console.log(newNum);
let results = numlist.filter((num) => num > 2);
let res1 = numlist.find((num) => num === 2);
// console.log(res1);
// console.log(results);
// calculate the sum using reduce
let sum = numlist.reduce((acc, num) => acc + num);
let c = 2 /* color.blue */;
//  ** Tuple **
//swap two number
let swapNum;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNum = swapNumbers(2, 3);
swapNum[0];
swapNum[1];
// ** Any **
// Do not use any | Avoid use any
let dept;
dept = "It";
dept = 40;
