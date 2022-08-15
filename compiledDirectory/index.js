"use strict";
// Typescript is a statically typed language. It means that you need to first declare the variable type before assigning any value
// Browser can not read type script so we need to compile it first as we do in most of the statically typed language 
// Once the compilation is done , It will generate the javascript file that you can be used with our index.html file 
let num = 5;
console.log(num);
let company = "Adhish Meena";
let ispublished = true;
let x = "hello";
let age = 1;
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, "hellow"];
//Tuple , with the help of tuple , we can assign the type as well 
let person = [1, "Brad", true];
//Tuple Array
let employee;
employee = [
    [1, "brad"],
    [2, "John"],
    [3, "Jill"],
];
//Union
let numbe = 22; // It means numbe can be string or number 
numbe = "Adhish"; /// I can assign it string as well 
//Enums   It basically allow us to define a set of the named constants
//objects
const user = { id: 1, name: 'John' }; // It is a object(user) that expects the number and string variable 
const myname = {
    id: 1,
    name: "John"
};
// Type Assertion
let cid = 1;
//let custtomerId=<number>cid
let custtomerId = cid;
// functions
// syntax is MultiplyNum(variable name: variable type , variable name ..........) : return type {
//return returnType
///      }
//Example
function MultiplyNum(x, y) {
    return x * y;
}
function message(x, y) {
    console.log("welcome to my fundamentals of  typescript");
}
const user2 = {
    id: 1,
    name: 'John'
};
user2.id = 5;
const add = (x, y) => x - y;
////////////////////////////////////////////////////////////////////////////
class Customer {
    // when we mention protected we can access this property in another class by extending this class(customer).
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const Customer1 = new Customer(1, 'Adhish Meena');
console.log(Customer1.register());
class Customerwithinterface {
    // when we mention protected we can access this property in another class by extending this class(customer).
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const Customer2 = new Customerwithinterface(1, 'Adhish Meena');
console.log(Customer2.register());
/////////////////////////////////////////Inheritance /////////////////////////////////////////////////////////////////////////////////////////////
class worker extends Customerwithinterface {
    constructor(id, name, designation) {
        super(id, name); // this will initialize the id and name property of parent class 
        this.designation = designation;
    }
}
const emp = new worker(3, "Meena", "Developer");
console.log(emp.register());
