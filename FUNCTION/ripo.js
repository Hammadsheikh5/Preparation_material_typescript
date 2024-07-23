//Named function
function add(x, y) {
    return x + y;
}
var returnvalue = add(5, 6);
console.log(returnvalue);
//Anonymous function  with type annotation
var myAdd1 = function (x, y) {
    return x + y;
};
console.log(myAdd1(5, 9));
console.log(typeof myAdd1);
//type names dont matter
var myAdd3 = function (x, y) {
    return x + ++y;
};
//Lambda functions	
// Lambda functions, also known as anonymous functions, are functions defined without a name.
// In JavaScript, lambda functions are created using the arrow function syntax. 														
var myAdd4 = function (a, b) { return a + b; };
//output will be: var myAdd4 = function(a : number, b : number) {return a + b};
console.log(myAdd4(5, 6));
//anonymous function type with optional parameters
var buildName1 = function (firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
};
console.log(buildName1("Hammad"));
console.log("===================================================================");
//Named function with optional and default parameters
//(Note that the parameter type will be optional when used with default value)
function buildName(firstName, lastName) {
    if (lastName === void 0) { lastName = "Khan"; }
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
var result1 = buildName("Bob"); //works correctly because last parameter is optional
// let result2 = buildName("Bob", "Adams", "Sr.");  //error, too many parameters
var result3 = buildName("Bob", "Adams"); //correct
console.log(result1);
console.log(result3);
console.log("===================================================================");
//anonymous function type with Rest parameters
var buildNameFun = function (firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
};
console.log(buildNameFun("Hammad", "ali", "moiz"));
//Note: Rest, optional and default parameters can only
// be at the end of the parameter list
