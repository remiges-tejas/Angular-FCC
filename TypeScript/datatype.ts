// let fname = 'tejas'
// fname= 10

import { NumericLiteral } from "typescript";

// ** String **
let myName: string;
myName = "tejas";
let updateName = myName.toUpperCase();
console.log(updateName);

//  ** Number **

let age: number;
age = 18.4;
let dob = "25";
// typecasting
let res = parseInt(dob);
// console.log(res);
// console.log(age);

// ** Boolean **

let isActive: boolean = false;
// console.log(isActive);

// ** Array **

// generic way to define array
let namesList: Array<string>;

let emp: String[];
emp = ["Tejas", "Vikas", "Tweet"];
let resEmp = emp.find((nameof) => nameof === "Tejas");
// console.log(resEmp);

let numlist: Array<number>;
numlist = [1, 2, 34, 5, 5];

let newNum = numlist[5];
// console.log(newNum);

let results = numlist.filter((num) => num > 2);
let res1 = numlist.find((num) => num === 2);
// console.log(res1);
// console.log(results);

// calculate the sum using reduce
let sum = numlist.reduce((acc, num) => acc + num);
// console.log(sum);

// ** ENUM **

const enum color {
  red,
  green,
  blue,
}
let c: color = color.blue;

//  ** Tuple **

//swap two number

let swapNum: [firstNum: number, secondNum: number];

function swapNumbers(num1: number, num2: number): [number, number] {
  return [num2, num1];
}

swapNum = swapNumbers(2, 3);

swapNum[0];
swapNum[1];

// ** Any **

// Do not use any | Avoid use any
let dept: any;
dept = "It";
dept = 40;



