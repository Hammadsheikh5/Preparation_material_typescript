// let myname: string | null;

// myname = null;
// console.log(myname);

// myname = "zia";
// console.log(myname);

// //myname = undefined; //Error
// //myname = 12; //Error

// let myAge: string | number;

// myAge = 16;//narrowing
// console.log(myAge);

// //console.log(myAge.toLowerCase());//Error

// myAge = "Dont Know";//narrowing
// console.log(myAge);

// console.log(myAge.toString()); // common to both types 
//                                //can be called even without narrowing

// console.log(myAge.toLowerCase());//Can be called on string 
//                                 //because of narrowing


                                
//ternary  operator
// Math.random() generates a random number between 0 (inclusive) and 1 (exclusive).
// Math.random() > 0.6 will evaluate to true or false, depending on whether the random number is greater than 0.6.
// If the condition Math.random() > 0.6 is true, newAge will be assigned the string "Khan".
// If the condition is false, newAge will be assigned the number 60.
// This line is using the ternary operator (? :) to choose between two values based on a condition.
let newAge = Math.random() > 0.6 ? "Khan": 60;
if (newAge === "Khan") {
    // Type of newAge: string
    newAge.toUpperCase(); // Can be called
}

if(typeof newAge === "string"){
    // Type of newAge: string
    newAge.toUpperCase(); // Can be called
}
console.log(newAge);

