// basic Interface Syntax
export interface User {
  name: string;
  age?: number;
  id: number;
  email: string;
}

// object destructring
let { name: user_name, email: user_email }: User = {
  name: "Tejas",
  id: 1,
  email: "bisentejas598@gmail.com",
};

// console.log(user);

// extending interface
interface Employees extends User {
  salary: number;
}

let emp1: Employees = {
  name: "Tejas",
  id: 1,
  email: "bisentejas598@gmail.com",
  salary: 200000,
};

// console.log(emp1);
// inteface having method

export interface Login {
  login(): User;
}

//  ** Array Destructring

let [user1, user2, ...resUsers]: User[] = [
  {
    name: "vikas",
    age: 12,
    id: 1,
    email: "vikas@gmail.com",
  },
  {
    name: "Tushar",
    age: 14,
    id: 2,
    email: "tushar@gmail.com",
  },
  {
    name: "Bisen",
    age: 14,
    id: 3,
    email: "bisen@gmail.com",
  },
  {
    name: "John",
    age: 14,
    id: 4,
    email: "bisen@gmail.com",
  },
];

// methods

// let res = resUsers.filter((user) => user.id === 4);
// console.log(res);
// let res1 = resUsers.map((user) => user.id + 1);
// console.log(res1);

// console.log(user1);
// console.log(user2);
// console.log(resUsers);

// ** Decorator in Ts **
// using this you can modify the propeties of method  at runtime

// @Component({})
// class component {
//   constructor(public name: string);
// }


// Module in TypeScript 

  // Es6 Module 