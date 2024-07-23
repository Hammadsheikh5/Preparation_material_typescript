// function parentfun(func: ()=>void ) {
//     console.log("Im the parent");
//     func()
// }

// function child() {
//     console.log("I am a child")
// }
// parentfun(child)

//with parameter and return value of callback function
function parentfun(abc:string,func: (name:string)=>number ) {
    console.log("Im the parent");
    let a = func(abc)
    console.log(a);
    

}

function child(name:string) {
    console.log("I am a child"+ name)
    return 5+6
}
parentfun("Good" ,child)