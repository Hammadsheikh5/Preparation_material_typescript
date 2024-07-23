
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
enum days {
    monday = 5,        //5
    tuesday,        //6
    wednesday,      //7
    thursday,       //8
    friday,         //9
    saturday,       //10
    sunday          //11
}
// console.log(days[0]);  
// console.log(days[2]); 

// Example 3: Fully initialized numeric enums
enum HttpStatus {
    Success = 200,
    NotFound = 404,
    InternalServerError = 500,
  }
  let Http :HttpStatus = HttpStatus.Success
  console.log(Http);
  
  console.log(HttpStatus.Success);
  console.log(HttpStatus.NotFound);
  console.log(HttpStatus.InternalServerError);
