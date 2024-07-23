// Functions in TypeScript are the building blocks of readable, maintainable, and reusable code. 
// A function is a set of statements to perform a specific task.
// //simple greet function
function greet() {
    console.log("hello world");
}
greet();
//Basic Function with Typed Parameters and Return Type
function add(a, b) {
    return a + b;
}
// add(2,6)        // no answer we need to store a function in a varaible
var adfunc = add(2, 6);
console.log(adfunc);
// Example: Optional Parameters
function detail(a, b) {
    if (b !== undefined) {
        console.log("".concat(a, " ").concat(b));
    }
    else {
        console.log("".concat(a));
    }
}
detail("hello0");
//default parameter
function adding(a, b) {
    if (a === void 0) { a = 2; }
    if (b === void 0) { b = 8; }
    return a + b;
}
console.log(adding(0, 8));
// Function with Rest Parameters
// Function with Rest Parameters
function colour(favcolor) {
    var alcolor = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        alcolor[_i - 1] = arguments[_i];
    }
    console.log("Favourite Color: ".concat(favcolor));
    console.log("All Colours: ".concat(alcolor));
}
colour("Blue", "Red", "green", "yello");
// Function Type Annotation
var addNumbers;
addNumbers = function (a, b) { return a + b; };
console.log(addNumbers(10, 15)); // Outputs: 25
