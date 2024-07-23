// The for loop executes the code block for a specified number of times.
//  It can be used to iterate over a fixed set of values, such as an array.
// Syntax 
// for (initial_count_value; termination-condition; step) {
//     //statements 
//  }
// let i : number ;
// for (i=0;i<10;i++){
//     console.log(i);
// }
//factorial
// let num : number = 5
// let j : number;
// let factorial :number =1
// for ( j = 1; j <= num; j++){
//     factorial*=j
// }
// console.log(factorial);
// for (let i = 0; i < 10;i++){
//     if (i<6){
//         console.log(i);
//         continue
//     }
//     console.log("Your number reach at 5");
//     if (i==9){
//         break
//     }
//     console.log(i);
// }
for (var i = 0; i < 20; i++) {
    if (i == 10) {
        break;
    }
    if (i % 2 == 0) {
        console.log("even : " + i);
        continue;
    }
    else {
        console.log("ODD : " + i);
    }
}
