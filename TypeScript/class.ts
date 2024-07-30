import { Login, User } from "./Interface";

// import * as UserLogin from './Interface'

interface address {
  street: string;
  city: string;
  state: string;
  pin: number;
}

class Employee implements Login {
  // Member Visibility
  // public,private(#), Protected

  // Private varaible  : #id use # to make
  #id: number;
  protected name: string;
  address: address;
  // impmenting login interface

  login(): User {
    return {
      name: "Tejas",
      id: 1,
      email: "bisentejas598@gmail.com",
    };
  }

  // Static Methods : Static Method Call by the class

  static getEpmoyeeCount(): number {
    return 50;
  }

  //Getter and Setter Methods
  get Emp(): number {
    return this.#id;
  }
  set Emp(id: number) {
    this.#id = id;
  }

  //  constructor
  constructor(id: number, name: string, address: address) {
    (this.#id = id), (this.name = name), (this.address = address);
  }

  // Method inside the class

  getNameWithAddress(): string {
    return `${this.name}  stay at ${this.address}`;
  }
}

// Inheritance And Super Classess
class Manager extends Employee {
  constructor(id: number, name: string, address: address) {
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
