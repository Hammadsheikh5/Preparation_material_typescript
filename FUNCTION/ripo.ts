//Named function
function add(x: number, y: number): number {
    return x+y;
}
let returnvalue : number =add(5,6)
console.log(returnvalue);


//Anonymous function  with type annotation
let myAdd1 :(x:number,y:number)=>number= function(x,y):number { 
    return x+y; 
};
console.log(myAdd1(5,9));
console.log(typeof myAdd1);

//type names dont matter
let myAdd3: (baseValue:number, increment:number)=>number = 	function(x: number, y: number): number { 
    return x + ++y
}

//Lambda functions	
// Lambda functions, also known as anonymous functions, are functions defined without a name.
// In JavaScript, lambda functions are created using the arrow function syntax. 														
let myAdd4 = (a : number, b : number) => a + b;
//output will be: var myAdd4 = function(a : number, b : number) {return a + b};
console.log(myAdd4(5,6));


//anonymous function type with optional parameters
var buildName1 : (firstName: string, lastName?: string) => string = 
function(firstName: string, lastName?: string) : string {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
	
console.log(buildName1("Hammad"));
console.log("===================================================================");


//Named function with optional and default parameters
//(Note that the parameter type will be optional when used with default value)
function buildName(firstName: string, lastName = "Khan") : string {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

let result1 = buildName("Bob");  //works correctly because last parameter is optional
// let result2 = buildName("Bob", "Adams", "Sr.");  //error, too many parameters
let result3 = buildName("Bob", "Adams");  //correct
console.log(result1);
console.log(result3);

console.log("===================================================================");

//anonymous function type with Rest parameters
var buildNameFun: (fname: string, ...rest: string[])=>string =
function (firstName: string, ...restOfName: string[]) {
	return firstName + " " + restOfName.join(" ");
}
console.log(buildNameFun("Hammad","ali","moiz"));

//Note: Rest, optional and default parameters can only
// be at the end of the parameter list
					
console.log("===================================================================");




