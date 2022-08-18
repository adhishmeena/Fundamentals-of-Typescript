// Typescript is a statically typed language. It means that you need to first declare the variable type before assigning any value
// Browser can not read type script so we need to compile it first as we do in most of the statically typed language 
// Once the compilation is done , It will generate the javascript file that can be used with our index.html file 



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

/// Interfaces 
interface ConInterface{

    id:number
   readonly name:string
    ageofUser?:number // ? represents that this is an optional feild  
}


const user2: ConInterface = {
    id:1,
    name:'John'
}


user2.id=5; 
//user2.name="Adhish" // this property is in read only mode so we can not assign value to it 


// remember we can not use interface with union or primitives but we can use types


//Inteface can also be used with functions 

interface Mathfun {
    (x:number , y: number):number
}

const add: Mathfun= (x:number , y:number): number => x-y


////////////////////////////////////////////////////////////////////////////

class Customer{   

    id:number  // this property are public by default but we change the access modifier for this lang properties as per our requirements 
    private name:string // This property can only be accessed in this class itself we can not change it's value by access this property outside class. 
                        // when we mention protected we can access this property in another class by extending this class(customer).
    constructor(id:number, name:string)
    {
   this.id=id
   this.name=name

    }

    register(){
       return `${this.name} is now registered`
    }


}

const Customer1= new Customer(1,'Adhish Meena')
console.log(Customer1.register())



//////////////////////////////////Interface with class ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
interface CustomerInterface { // always remember implements force your class to implement property and methods that is present in interface or you can say it is like a governance body 

    id:number
    name:string
    register():string
}


class Customerwithinterface implements CustomerInterface {   

    id:number  // this property are public by default but we change the access modifier for this lang properties as per our requirements 
    name:string // This property can only be accessed in this class itself we can not change it's value by access this property outside class. 
                        // when we mention protected we can access this property in another class by extending this class(customer).
    constructor(id:number, name:string)
    {
   this.id=id
   this.name=name

    }

    register(){
       return `${this.name} is now registered`
    }


}

const Customer2= new Customerwithinterface(1,'Adhish Meena')
console.log(Customer2.register())


/////////////////////////////////////////Inheritance /////////////////////////////////////////////////////////////////////////////////////////////


class worker extends Customerwithinterface{
    designation:string

    constructor(id:number , name:string, designation:string)    
    {
         super(id,name)// this will initialize the id and name property of parent class 
         this.designation=designation
    }
}

const emp = new worker(3,"Meena", "Developer")

console.log(emp.register())

