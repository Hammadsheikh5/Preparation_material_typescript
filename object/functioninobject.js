var _this = this;
//using function in an object 
var my = {
    myn: "hammad",
    last: "siddiq",
    login: function () {
        console.log(_this.myn); //this mean find under object
    },
    say: function () {
        console.log(this.last);
    }
};
my.login(); //accescing object function
my.say();
