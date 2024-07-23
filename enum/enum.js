// Enums in TypeScript allow you to define a set of named constants.
//  An enum is a way of giving more friendly names to sets of numeric values.
// Syntax
// enum enumName {
//     Enum members
//  }
// Enums allow you to define a collection of related values that can be numeric or string-based. 
// Here's how you can define and use enums in TypeScript:
// Numeric Enums
// Numeric enums are the default in TypeScript.
//  By default, enums will initialize the first value to 0 and add 1 to each subsequent value.
// enum days {
//     monday,         //0
//     tuesday,        //1
//     wednesday,      //2
//     thursday,       //3
//     friday,         //4
//     saturday,       //5
//     sunday          //6
// }
// console.log(days.monday);  //0
// console.log(days.friday);  //4
//if we assign a value 5 to monday
// enum days {
//     monday = 5,        //5
//     tuesday,        //6
//     wednesday,      //7
//     thursday,       //8
//     friday,         //9
//     saturday,       //10
//     sunday          //11
// }
// console.log(days.monday);  //0
// console.log(days.friday);  //4
// now usin index gets the value
var days;
(function (days) {
    days[days["monday"] = 5] = "monday";
    days[days["tuesday"] = 6] = "tuesday";
    days[days["wednesday"] = 7] = "wednesday";
    days[days["thursday"] = 8] = "thursday";
    days[days["friday"] = 9] = "friday";
    days[days["saturday"] = 10] = "saturday";
    days[days["sunday"] = 11] = "sunday"; //11
})(days || (days = {}));
console.log(days[0]); //0
console.log(days[2]); //4
// Example 3: Fully initialized numeric enums
var HttpStatus;
(function (HttpStatus) {
    HttpStatus[HttpStatus["Success"] = 200] = "Success";
    HttpStatus[HttpStatus["NotFound"] = 404] = "NotFound";
    HttpStatus[HttpStatus["InternalServerError"] = 500] = "InternalServerError";
})(HttpStatus || (HttpStatus = {}));
var Http = HttpStatus.Success;
console.log(Http);
console.log(HttpStatus.Success);
console.log(HttpStatus.NotFound);
console.log(HttpStatus.InternalServerError);
