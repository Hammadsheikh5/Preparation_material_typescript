// Accessor Methods (These do not modify the array)
// concat(): Merges two or more arrays and returns a new array.
// let arr :number[]=[1,3,6,8]
// let arr2 :number[]=[2,4,5,7]
// let arr3 :number []= arr.concat(arr2) //merge two array
// console.log(arr)
// console.log(arr2);;
// console.log(arr3);
// let arr :number[]=[1,2]
// let arr1 :number[]=[3,4]
// let arr2:number[ ]=[5,6]
// let arr3 :number []= arr.concat(arr1,arr2,7,8) //merge three array and also add 7 and 8
// console.log(arr)
// console.log(arr2);;
// console.log(arr3);
// //we can also concat in a console
// console.log("New array :",arr.concat(arr2,arr1));
// slice(): Extracts a section of an array and returns a new array.
// array.slice(start?: number, end?: number): T[]
// start (optional): The index at which to begin extraction.
// end (optional): The index at which to end extraction
// let arr :number[]=[1,2,3,6,9,12]
// let arr2 = arr.slice(1,5)       // Extract elements from index 1 to index 5 (not including index 5)
// console.log(arr);
// console.log(arr2);
// Using Only the Start Parameter
// console.log(arr.slice(2))  // Extract elements from index 2 to the end of the array
// Cloning Arrays: You can clone an array by using slice without any arguments.
// let arr3 :number []= arr.slice()
// console.log(arr3);
// console.log(arr);
//join(): Joins all elements of an array into a string.
// According to the name, this method joins all elements of the array into a string with a given operator.
// If an operator is not given, it joins elements with a comma(,).
// let arr :string[]=["ali","al","kl"]
// let str :string = arr.join()
// console.log(typeof str);
// console.log(str);
// console.log(arr);
//join take one arguments array.join(separator?: string): string
// separator (optional): A string to separate each pair of adjacent elements of the array.
//  If omitted, the array elements are separated with a comma by default.
// let str :string = arr.join(" ")
// console.log(str);
// console.log(arr);
// indexOf(): Returns the first index at which a given element can be found in the array.
// array.indexOf(searchElement: T, fromIndex?: number): number
// searchElement: The value to search for within the array.
// fromIndex (optional): The index to start the search at. 
// If omitted, the search starts from the beginning of the array (index 0). 
// indexOf searches for the first occurrence
// let arr :number[]=[1,2,3,6,9,12]
// let arr2 = arr.indexOf(1,)
// console.log(typeof arr2);
// console.log(arr2);
// includes(): Determines whether an array contains a certain element.
// array.includes(searchElement: T, fromIndex?: number): boolean
// searchElement: The value to search for within the array.
// fromIndex (optional): The index at which to begin the search. Defaults to 0. 
// let fruits: string[] = ["apple", "banana", "cherry", "date"];
// let hasBanana = fruits.includes("banana");
// console.log(hasBanana); // Output: true
// let hasOrange = fruits.includes("orange");
// console.log(hasOrange); // Output: false
var fruits = ["apple", "banana", "cherry", "date"];
fruits.forEach(function (value, index) {
    console.log("".concat(value, " has index ").concat(index));
});
