// Functions in TypeScript are the building blocks of readable, maintainable, and reusable code. 
// A function is a set of statements to perform a specific task.
// //simple greet function
function greet (){
    console.log("hello world");  
}
greet()


//Basic Function with Typed Parameters and Return Type
function add (a:number,b:number):number{
    return a+b
}
// add(2,6)        // no answer we need to store a function in a varaible
let adfunc :number = add(2,6)
console.log(adfunc);


// Example: Optional Parameters
function detail (a:string, b?:string){
    if (b!==undefined) {
        console.log(`${a} ${b}` );

    }else{
        console.log(`${a}` )
    }
}
detail("hello0", )

//default parameter
function adding(a:number=2,b:number=8):number{
    return a+b
}
console.log(adding(0,8));


// Function with Rest Parameters
// Function with Rest Parameters
function colour(favcolor: string, ...alcolor: string[]) {
    console.log(`Favourite Color: ${favcolor}`);
    console.log(`All Colours: ${alcolor}`);
}

colour("Blue", "Red","green","yello");

// Function Type Annotation
let addNumbers: (a: number, b: number) => number;
addNumbers = (a, b) => a + b;
console.log(addNumbers(10, 15)); // Outputs: 25