// The for...of loop
// The for...of loop in another variant of the for loop. 
// The for...of loop can be used to iterate through the values of iterables.
//  For example, we can use the for...of loop to iterate through the array and get values from every index.
// Syntax
// The syntax of the for...of loop in TypeScript is as follows –
// for (var element of iterable){
//     // statements
//  }
var str = "Hammad";
for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
    var element = str_1[_i];
    console.log(element);
    console.log(typeof element);
}
console.log("-------------------------------------------------------------------------");
// Example: The for...of loop with arrays
var arr = [12, 23, 85, 96, 25, 14, 35];
for (var _a = 0, arr_1 = arr; _a < arr_1.length; _a++) {
    var values = arr_1[_a];
    console.log(values);
    console.log(typeof values);
}
console.log("-------------------------------------------------------------------------");
// Example: The for...of loop with tuples
var tup = ["hammad", 456, "Siddique"];
for (var _b = 0, tup_1 = tup; _b < tup_1.length; _b++) {
    var values = tup_1[_b];
    console.log(values);
    console.log(typeof values);
}
