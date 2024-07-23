// objects types likhe this can be written in separetely and can be reused 
// Syntax
// interface interface_name { 
// }

// Example: Interface and Objects

interface typess {
    first : string,
    second : string,
    id : number
}

const obj : typess = {
    first : "hammad",
    second : "siddiq",
    id : 12345
}
// Example: Interface and Objects (function)

interface example2 {
    first? : string,
    second? : string,
    func : (a:number,b:number)=>number
}
const objec2 : example2 = {
    func : (a,b)=>a+b
}
console.log(objec2.func(2,6)
);


// Union Type and Interface
interface example3 {
    age : string|number,
    id : number|number
}
const object3 : example3 = {
    age : "sixteen",
    id : 23
}
console.log(object3.id);


// Interfaces and Arrays using index signature

interface example4 {
   [index :number]:string
}

let list1 : example4 =["one","two","thrre"]
console.log(list1);
console.log(list1);
