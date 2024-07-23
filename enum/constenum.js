// console.log(color[0]); //  Eror ,A const enum member can only be accessed using a string literal.ts(2476)
var color1 = 0 /* color.red */;
console.log(color1);
console.log(1 /* color["green"] */);
var color3 = 2 /* color2["blue"] */;
console.log(color3);
