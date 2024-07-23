// These two interfaces are completely
// transferrable in a structural type system:

interface Ball {
    diameter: number;
}

interface Sphere {
    diameter: number;
}
  
  let ball: Ball = { diameter: 10 };
  let sphere: Sphere = { diameter: 20 };
  console.log(ball);
  console.log(sphere);

console.log("=============================================");

ball = sphere; 
console.log(ball);
console.log(sphere);

console.log("=============================================");

interface Tube {
    diameter : number,
    lenght: number
}
let tube:Tube={
    diameter : 23,
    lenght : 6
}
console.log(tube);
console.log(ball);
ball=tube
console.log(ball);

