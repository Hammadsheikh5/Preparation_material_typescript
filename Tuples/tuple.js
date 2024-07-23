// let tuple:[string,number] =["hammad",23]
// tuple.pop()
// console.log(typeof tuple);
// console.log(tuple);
var staff = [
    [0, "Adankwo", "adankwo.e@"],
    [1, "Kanokwan", "kanokwan.s@"],
    [2, "Aneurin", "aneurin.s@", "Supervisor"],
];
var payStubs = [
    [staff[0], 250],
    [staff[1], 250, 260],
    [staff[0], 300, 300, 300],
];
var monthOnePayments = payStubs[0][1] + payStubs[1][1] + payStubs[2][1];
var monthTwoPayments = payStubs[1][2] + payStubs[2][2];
var monthThreePayments = payStubs[2][2];
