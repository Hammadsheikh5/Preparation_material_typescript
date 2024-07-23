let balls ={
    height :23,
    weight : 56
}
//pass by refrence
let balls2 =balls  //balls 2 equal to balls
//change age in both (balls and balls2)
balls2.height=256   //change the value.height of balls2 is 256
console.log(balls);   //it is also change in balls
console.log(balls2);  

