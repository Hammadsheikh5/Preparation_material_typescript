// An object in TypeScript is an instance which contains set of key value pairs.
//  The key value pairs are also referred as object properties.
// The syntax to create an object in TypeScript is given below − 
// var object_name = { 
//     key1: "value1", //scalar value 
//     key2: "value",  
//     key3: function() {
//        //functions 
//     }, 
//     key4:[ "content1", "content2"] //collection  
//  };
// As shown above, an object can contain scalar values, 
// functions and structures like arrays and tuples.
//object is a data structure that store key-value pair
var car = {
    type: "flat",
    //key:value
    //property
    model: "kawa",
    year: 2020
};
car.year = 222;
// console.log(car);
//type annotation
var car1 = {
    type: "flat",
    //key:value
    //property
    model: "kawa",
    year: 2020
};
//accesing key value
console.log(car.type);
console.log(car["type"]);
//accessing all key
console.log(Object.keys(car));
//accessing all value
//console.log(Object.values(car));
//aacseing all entries
console.log(Object.entries(car));
