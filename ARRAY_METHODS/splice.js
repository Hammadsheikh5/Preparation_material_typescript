/*start: The index at which to start changing the array.
 If negative, it will begin that many elements from the end of the array.
deleteCount: Optional. The number of elements to remove from the array starting at start.
 If omitted or if greater than array.length - start, all elements from start to the end of the array will be removed.
...items: Optional. Elements to add to the array beginning at start.*/
// The splice method in TypeScript (and JavaScript) is a versatile method used to modify an array by removing, replacing, or adding elements at a specified index
//splice method overwrite the original array
//return dleted elements in array
//pass only one arguments
// let arr :number[]=[22,3,45,13,10]
// let arr2 = arr.splice(2)   //2 means at index 1 ,last index is not countable
// console.log(arr2);      //45,13,10
// console.log(arr);       //22,3
// //if we pass the number in splice method is greater than array lenght
// let arr2 = arr.splice(5)
// console.log(arr2);      //[] empty array nothing deleted
// console.log(arr);       //22,3,45,13,10
//now pass two arguments , array.splice(start: number, deleteCount: number): T[]
// start: The index at which to start changing the array. If negative, it will begin that many elements from the end of the array.
// deleteCount: The number of elements to remove from the array starting at start.
// let arr :number[]=[22,3,45,13,10]
// let arr2:number[]=arr.splice(1,2)   //start at index 1 , delete two elements from start 
// console.log(arr2);       //3,45
// console.log(arr);      //22,13,10
//if deleteCount is greater than the number of elements starting from start to the end of the array,
// splice will remove all elements from start onward.
// let arr2:number[]=arr.splice(1,10)   //start at index 1 , delete 10 elements from start 
// console.log(arr2);       //3,45,13,10
// console.log(arr);      //22
//if deletecount is 0 nothing will delete
// let arr2:number[]=arr.splice(1,0)   //start at index 1 , delete 0 elements from start 
// console.log(arr2);       //[]
// console.log(arr);      //22,3,45,13,10
//third parameter 
//...items: Optional. Elements to add to the array beginning at 'start'.
// let arr :number[]=[22,3,45,13,10]
// let arr2=arr.splice(1,0,23,25)      //add 23 and 25 starting at index 1 and nothing deleted
// console.log(arr2);
// console.log(arr);
//now use all parameter af splice method in different way
//1)
// let arr :number[]=[22,3,45,13,10]
// let arr2=arr.splice(3,1,2,2)      //add 2 and 5 starting at index 3 and deleted one item from 'start'
// console.log(arr2);       //13
// console.log(arr);        // 22,3,45,2,5,10
//2)
var arr = [22, 3, 45, 13, 10];
var arr2 = arr.splice(0, 3, 28, 42, 39); //add 28,42 and 39 starting at index 0 and deleted 3 item from 'start'
console.log(arr2); //22,3,45
console.log(arr); // 28,42,39,13,10
