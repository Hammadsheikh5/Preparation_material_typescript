// Aliasing Primitive Types
type userIDtype = number;
let uerID1 : userIDtype = 1234
let uerID2 : userIDtype = 12345
let uerID3 : userIDtype = 123456


// Aliasing Union Types
type ageType = number|string;
let age1 : ageType = "Fifty"
let age2 : ageType = 14
let age3 : ageType = "23"

// Aliasing Tuples
type tupletype = [number,string,boolean]
let tuple : tupletype = [13,"age",true ]
// let tuple1 : tupletype = [13,"age",true ,"str"]             //EROOR

// Aliasing ARAY
type arrType =(number|string )[]
let arr :arrType = [13,15,134,"Hello", "world"]
// let arr2 :arrType = [13,15,134,"Hello", "world",true] //error


// Aliasing Object Types
type obj = {
    id : number,
    name : string
}
let obj1 :obj = {
    name : "Hammad",
    id :  23
}
let obj2 :obj = {
    name : "ALi",
    id :  25,
    // userid : "hammad@type.com"  //error
}

// Aliasing Function Types
// Aliasing function types can be particularly useful when dealing with higher-order functions or callbacks,
//  providing a clear contract for what functions are supposed to accept and return.

type functype = (a:number,b:number)=> number;
let add :functype = (a,b)=> a+b;
let subt : functype = (a,b)=>a-b;
console.log(add(2,3));
console.log(subt(6,3));


// Aliasing Object Types with index signature
type obje = {
    [key : string]: number
}

const obje1 : obje ={
    name : 132,
    age : 23,
    age2 : 25,
    age3 : 26
}
