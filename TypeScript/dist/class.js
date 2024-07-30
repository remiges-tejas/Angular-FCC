"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Employee_id;
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    // impmenting login interface
    login() {
        return {
            name: "Tejas",
            id: 1,
            email: "bisentejas598@gmail.com",
        };
    }
    // Static Methods : Static Method Call by the class
    static getEpmoyeeCount() {
        return 50;
    }
    //Getter and Setter Methods
    get Emp() {
        return __classPrivateFieldGet(this, _Employee_id, "f");
    }
    set Emp(id) {
        __classPrivateFieldSet(this, _Employee_id, id, "f");
    }
    //  constructor
    constructor(id, name, address) {
        // Member Visibility
        // public,private(#), Protected
        // Private varaible  : #id use # to make
        _Employee_id.set(this, void 0);
        (__classPrivateFieldSet(this, _Employee_id, id, "f")), (this.name = name), (this.address = address);
    }
    // Method inside the class
    getNameWithAddress() {
        return `${this.name}  stay at ${this.address}`;
    }
}
_Employee_id = new WeakMap();
// Inheritance And Super Classess
class Manager extends Employee {
    constructor(id, name, address) {
        super(id, name, address);
    }
}
// Creating Instace of a class i.e Employee
let joe = new Employee(1, "Tejas", {
    street: "ABC",
    city: "Gondia",
    state: "Maharashtra",
    pin: 441801,
});
let getaddr = joe.getNameWithAddress();
console.log(joe);
// console.log(getaddr);
// Accessing Getter and Setter
joe.Emp = 23;
console.log(joe.Emp);
// Accesing static method
let resCount = Employee.getEpmoyeeCount();
// console.log(resCount);
// Manager Class Instaces Creating Here
// let m1 = new Manager(1, "Mike", "Delhi");
// let mangerOut = m1.getNameWithAddress();
// console.log(m1);
// console.log(mangerOut);
