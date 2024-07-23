//         //properties
// let arr: string[] = ["apple", "banana", "orange", "mango"];
// console.log(arr.length);
// let a :number=arr.length
// console.log(a);
//         //ACCESSING THE ELEMENT OF ARRAY
// console.log(arr[1]);
//         //ACCESSING THE all ELEMENT OF ARRAY
// console.log(arr);
//         //we can use this method to store diifernt types of data types in an array
// let arr2 : (string|number|boolean)[]=["apple","banana","orange","mango",4,5,true];
// console.log(arr2);
//         // to change the element of an array by its index number
// arr[0] = "kiwi";
// console.log(arr);
//         //(Array Destructuring) store an array elements in different varaibles
// let arr3:number[]=[1,2,3,4]
// let [a,b,c] = arr3
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(arr3);
// let a =arr3[0]
// let b = arr3[2]
// console.log(a,b);
//         //array destructing using rest operator
// let arr4:number[]=[1,2,3,4]
// let [a , ...rest]= arr4 //rest is not a keyword we can use any word
// console.log(a);
// console.log(rest);
//          //Methods
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
// let arr:number[]=[32,22,10,12]
// arr.unshift(56,2)
// console.log(arr);
//         // shift(): Removes the first element from an array and returns that element.
// arr.shift()
// console.log(arr);
