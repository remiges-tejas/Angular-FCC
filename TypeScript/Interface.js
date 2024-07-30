"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// object destructring
let { name: user_name, email: user_email } = {
    name: "Tejas",
    id: 1,
    email: "bisentejas598@gmail.com",
};
let emp1 = {
    name: "Tejas",
    id: 1,
    email: "bisentejas598@gmail.com",
    salary: 200000,
};
//  ** Array Destructring
let [user1, user2, ...resUsers] = [
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
let res = resUsers.filter((user) => user.id === 4);
console.log(res);
let res1 = resUsers.map((user) => user.id + 1);
console.log(res1);
// console.log(user1);
// console.log(user2);
// console.log(resUsers);
