//  First Way Classical Function
function twoAdd(num1: number, num2: number): number {
  return num1 + num2;

  // if you miss return statement
  // it gives the void return
  //   type which means nothing
}
// console.log(twoAdd(3,2));

//  Second Way Arrow Function
const subtractNum = (num1: number, num2: number): number => {
  return num1 - num2;
};

// console.log(subtractNum(23 ,1));

//  ** Third Way to Define func
const mul = function (num1: number, num2: number): number {
  return num1 * num2;
};
// console.log(mul(2, 3));

// ** Type Of Parameter **

// Optional parameter
// Required parameter
// Rest parameter

// optional Parameter  * ?: * //
function twoAdd1(num1: number, num2: number, num3?: number): number {
  return num2;
}

type PayBill = {
  consumerNo: number;
  cosumerName: string;
  coupunCode?: String; // Optional Parameter
};

function PayBill(user: PayBill): PayBill {
  return { consumerNo: 123, cosumerName: " Tejas" };
}
let billInfo = PayBill({ consumerNo: 1234, cosumerName: "Tejas" });
// console.log(billInfo);

// ** Required Parameter **

function addThree(num1: number, num2: number, num3 = 5): number {
  return num1 + num2 + num3;
}
let OutputThreNum = addThree(2, 4);
// console.log(OutputThreNum);

// ***** Rest Parameter ******

function addtwo(num1: number, num2: number, ...num3: number[]): number {
  return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}

// console.log(addtwo(2, 3, 4, 5));

// ******** Generic Function ********

function getItems<Type>(items: Type[]): Type[] {
  return new Array<Type>().concat(items);
}

let concastresult = getItems<number>([2, 12, 3, 4, 5, 5]);

console.log(concastresult);
