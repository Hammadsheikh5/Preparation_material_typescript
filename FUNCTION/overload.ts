// //overloads give us type-checked calls

// //its customary to order overloads from most specific to least specific
// function add(arg1: string, arg2: string): string;//option 1
// function add(arg1: number, arg2: number): number;//option 2
// function add(arg1: boolean, arg2: boolean): boolean;//option 3
// //this is not part of the overload list, 
// //so it has only three overloads
// function add(arg1: any, arg2: any): any {
//     return arg1 * arg2;
// }

// //Calling 'add' with any other parameter types would cause an error except for the three options
// console.log(add(1, 2));
// console.log(add("Hello", "World"));
// console.log(add(true, false));


console.log("---------------------------------------------------------------------");
// Overloads
function add(arg1: string, arg2: string): string;
function add(arg1: number, arg2: number): number;
function add(arg1: boolean, arg2: boolean): boolean;

// Implementation
function add(arg1: any, arg2: any): any {
    if (typeof arg1 === "string" && typeof arg2 === "string") {
        return arg1 + arg2;
    }
    if (typeof arg1 === "number" && typeof arg2 === "number") {
        return arg1 + arg2;
    }
    if (typeof arg1 === "boolean" && typeof arg2 === "boolean") {
        return arg1 && arg2; // Logical AND for boolean
    }
    throw new Error("Invalid arguments");
}

// Calling the overloaded function
console.log(add(1, 2));             // Output: 3
console.log(add("Hello", "World")); // Output: HelloWorld
console.log(add(true, false));      // Output: false
// console.log(add(true,1));      ///error


// Uncommenting the following line will cause a runtime error
// console.log(add(1, "2")); // Error: Invalid arguments

