//         //Mutator Methods (These modify the array)
// 1,pop 2,push 3,shift 4,unshift 5,splice
//        // Mutating Operations: All these methods modify the original array directly. They do not return a new array unless specified 
//         //push(): Adds one or more elements to the end of an array and returns the new length of the array.
// let arr5:number[]=[32,22,10,12]
// arr5.push(5,45)
// console.log(arr5);
//         //pop(): Removes the last element from an array and returns that element.
// arr5.pop()
// console.log(arr5);
// let lastnumber = arr5.pop()    //accseing the last deleted number and store in a variable
// console.log(lastnumber);
// console.log(typeof lastnumber);
// console.log(arr5);
// console.log(arr5.pop());        //directly access the deleted number
// console.log(arr5);
//         //unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array.
var arr = [32, 22, 10, 12];
arr.unshift(56, 2);
console.log(arr);
// shift(): Removes the first element from an array and returns that element.
arr.shift();
console.log(arr);
