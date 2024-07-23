(function  () {
    console.log("run immedately");
    
})();

console.log("====================================================================");


// You can also pass parameters to an IIFE:

(function(value : string){
    console.log(`My name is ${value}`);
    
})("HAMMAD")

console.log("====================================================================");

// Example 4: IIFE in ES6 with Arrow Functions
(() => {
    console.log("This is an ES6 IIFE!");
})();