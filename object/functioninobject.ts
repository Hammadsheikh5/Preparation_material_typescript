//using function in an object 
const my ={
    myn : "hammad",
    last : "siddiq",
    login : ()=>{   //arrow function gives you undefined 
        console.log(this.myn);  //this mean find under object
        
    },
    say : function () {
        console.log(this.last);  //function definition method give you this.last
        
    }
}

my.login() //accescing object function

my.say()