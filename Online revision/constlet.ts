// let a = "hello"
// a="hy"
// console.log(a);


// const age =23
// // age = 25

 //blocked scope

// if (true) {
//     let z= 13
// } else {
//     let z =14
    
// }
// console.log(z);  //cannot find z
  

//for var
if (true) {
    var b =15  //when its true b =15
} else {
    var b =45   //when its false b=45
}
console.log(b);     //and also acces by another block


//const and let are blocked scope while var is not