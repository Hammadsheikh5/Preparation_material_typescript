"use strict";
//expect object
function logperson(person2) {
    console.log(person2.name);
}
const person = {
    name: "Hammad",
    age: 23,
    no: 1320
};
const person2 = {
    name: "ali",
    age: 22,
    no: 120
};
logperson(person2);
logperson(person);
