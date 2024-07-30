"use strict";
//  First Way Classical Function
function twoAdd(num1, num2) {
    return num1 + num2;
    // if you miss return statement
    // it gives the void return
    //   type which means nothing
}
// console.log(twoAdd(3,2));
//  Second Way Arrow Function
const subtractNum = (num1, num2) => {
    return num1 - num2;
};
// console.log(subtractNum(23 ,1));
//  ** Third Way to Define func
const mul = function (num1, num2) {
    return num1 * num2;
};
// console.log(mul(2, 3));
// ** Type Of Parameter **
// Optional parameter
// Required parameter
// Rest parameter
// optional Parameter  * ?: * //
function twoAdd1(num1, num2, num3) {
    return num2;
}
function PayBill(user) {
    return { consumerNo: 123, cosumerName: " Tejas" };
}
let billInfo = PayBill({ consumerNo: 1234, cosumerName: "Tejas" });
// console.log(billInfo);
// ** Required Parameter **
function addThree(num1, num2, num3 = 5) {
    return num1 + num2 + num3;
}
let OutputThreNum = addThree(2, 4);
// console.log(OutputThreNum);
// ***** Rest Parameter ******
function addtwo(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
// console.log(addtwo(2, 3, 4, 5));
// ******** Generic Function ********
function getItems(items) {
    return new Array().concat(items);
}
let concastresult = getItems([2, 12, 3, 4, 5, 5]);
console.log(concastresult);
