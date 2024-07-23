// String Enums
// String enums are similar to numeric ones except that values of enums members are assigned with strings instead of numeric ones.
//  The string enums do not possess auto-increment behavior.
var TrafficLight;
(function (TrafficLight) {
    TrafficLight["Red"] = "stop";
    TrafficLight["Yellow"] = "caution";
    TrafficLight["Green"] = "go";
})(TrafficLight || (TrafficLight = {}));
console.log(TrafficLight.Red);
console.log(TrafficLight.Yellow);
console.log(TrafficLight.Green);
