// The for...in loop
// Another variation of the for loop is the for... in loop. 
// The for… in loop can be used to iterate over a set of values as in the case of an array or a tuple.
// Syntax
// for (var val in list) { 
//     //statements 
//  }

// Example: The for...in loop with strings
// The right-hand side of a 'for...in' statement must be of type 'any', 
// an object type or a type parameter, but here has type 'string'.ts(2407)
let str : any = "Hammad"
let j :any ;
for (j in str){
    console.log(str[j]);
    
}
console.log("-------------------------------------------------------------------------");


// Example: The for...in loop with arrays
// The left-hand side of a 'for...in' statement must be of type 'string' or 'any'
let arr : any = [12,23,85,96,25,14,35]
let i :string ;
for (i in arr){
    console.log(arr[i]);
    console.log(typeof i);

}

console.log("-------------------------------------------------------------------------");

// Example: The for...in loop with tuples
let tup : [string,number,string]=["hammad",456,"Siddique"]
let k :string;
for(k in tup){
    console.log(tup[k]);
    
}