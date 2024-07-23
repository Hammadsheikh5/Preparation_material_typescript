"use strict";
// function parentfun(func: ()=>void ) {
//     console.log("Im the parent");
//     func()
// }
// function child() {
//     console.log("I am a child")
// }
// parentfun(child)
//with parameter and return value of callback function
function parentfun(abc, func) {
    console.log("Im the parent");
    let a = func(abc);
    console.log(a);
}
function child(name) {
    console.log("I am a child" + name);
    return 5 + 6;
}
parentfun("Good", child);
