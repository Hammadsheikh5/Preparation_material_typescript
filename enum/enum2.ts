// String Enums
// String enums are similar to numeric ones except that values of enums members are assigned with strings instead of numeric ones.
//  The string enums do not possess auto-increment behavior.

enum TrafficLight {
    Red = "stop",
    Yellow = "caution",
    Green = "go",
  }
  console.log(TrafficLight.Red);
  console.log(TrafficLight.Yellow);
  console.log(TrafficLight.Green);