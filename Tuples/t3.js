var staff = [["Ali", 23], ["Hadi", 24], ["Umer", 26]];
var pay = [[staff[0], 250, 2253], [staff[1], 250, 256, 2465], [staff[2], 2500, 65, 9663]];
var pay1 = pay[0].slice(1);
console.log();
console.log(pay[1].slice(1));
console.log(pay[2].slice(1));
var totalSum = pay1.reduce(function (accumulator, currentValue) { return accumulator + currentValue; }, 0);
console.log("The sum of the numbers is:", totalSum);
