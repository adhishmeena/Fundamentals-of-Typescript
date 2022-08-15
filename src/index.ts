// Typescript is a statically typed language. It means that you need to first declare the variable type before assigning any value
// Browser can not read type script so we need to compile it first as we do in most of the statically typed language 
// Once the compilation is done , It will generate the javascript file that you can be used with our index.html file 



let num: number =5

console.log(num)
let company: string = "Adhish Meena";
let ispublished: boolean = true;

let x: any = "hello";
let age: Number = 1;

let ids:number[]=[1,2,3,4,5]

let arr: any[] = [1,true,"hellow"]

//Tuple , with the help of tuple , we can assign the type as well 
let person: [number, string, boolean] = [1,"Brad" , true]

//Tuple Array

let employee:[number,string][]


employee=[
  [1,"brad"],
  [2,"John"],
  [3,"Jill"],

]


//Union
let numbe : string | number =22   // It means numbe can be string or number 

numbe="Adhish" /// I can assign it string as well 

//Enums   It basically allow us to define a set of the named constants

//objects

const user:{
    id: number,
    name: string
} = { id: 1,name:'John'} // It is a object(user) that expects the number and string variable 

// or we can define objects in the underlying way as well 

type User1 ={
    id:number
    name:string
}

const myname: User1={
    id:1,
    name:"John"
}


// Type Assertion

let cid:any=1
//let custtomerId=<number>cid
let custtomerId=cid as number


// functions

// syntax is MultiplyNum(variable name: variable type , variable name ..........) : return type {
       

//return returnType

///      }

//Example
function MultiplyNum(x:number , y:number) : number {
    return x*y
}


function message(x:number , y:number) : void {
    console.log("welcome to my fundamentals of  typescript")
}

