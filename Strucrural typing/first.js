// These two interfaces are completely
// transferrable in a structural type system:
var ball = { diameter: 10 };
var sphere = { diameter: 20 };
console.log(ball);
console.log(sphere);
console.log("=============================================");
ball = sphere;
console.log(ball);
console.log(sphere);
console.log("=============================================");
var tube = {
    diameter: 23,
    lenght: 6
};
console.log(tube);
console.log(ball);
ball = tube;
console.log(ball);
