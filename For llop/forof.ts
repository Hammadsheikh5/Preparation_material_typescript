// The for...of loop
// The for...of loop in another variant of the for loop. 
// The for...of loop can be used to iterate through the values of iterables.
//  For example, we can use the for...of loop to iterate through the array and get values from every index.

// Syntax
// The syntax of the for...of loop in TypeScript is as follows –

// for (var element of iterable){
//     // statements
//  }

let str : string = "Hammad"
for (let element of str){
    console.log(element);
    console.log(typeof element);
    
}
console.log("-------------------------------------------------------------------------");


// Example: The for...of loop with arrays
let arr : number[] = [12,23,85,96,25,14,35]

for (const values of arr){
    console.log(values);
    console.log(typeof values);

}

console.log("-------------------------------------------------------------------------");

// Example: The for...of loop with tuples
let tup : [string,number,string]=["hammad",456,"Siddique"]
for(const values of tup){
    console.log(values);
    console.log(typeof values);
    
}