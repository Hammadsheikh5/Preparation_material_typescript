// Iteration Methods
                // forEach(): Executes a provided function once for each array element.

// array.forEach(callbackFn: (currentValue: T, index: number, array: T[]) => void, thisArg?: any): void
// callbackFn: The function to execute on each element, taking three arguments:
// currentValue: The current element being processed.
// index (optional): The index of the current element.
// array (optional): The array forEach was called upon.
// thisArg (optional): Value to use as this when executing callbackFn.

// Here's a simple example demonstrating the basic usage of the forEach method:
let fruits: string[] = ["apple", "banana", "cherry", "date"];
fruits.forEach((value)=>{
    console.log(value);
})

// You can also use the index and the array itself in the forEach callback function:
let fruits1: string[] = ["apple", "banana", "cherry", "date"];
fruits.forEach((value,index)=>{
    console.log(`${value} has index ${index}`);
})

