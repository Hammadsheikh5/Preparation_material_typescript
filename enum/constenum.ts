const enum color{
    red,
    green,
    blue
}
// console.log(color[0]); //  Eror ,A const enum member can only be accessed using a string literal.ts(2476)
let color1:number= color.red
console.log(color1);
console.log(color["green"]);



const enum color2{
    red = 1,
    blue,
    green
}
let color3:number= color2["blue"]
console.log(color3);
