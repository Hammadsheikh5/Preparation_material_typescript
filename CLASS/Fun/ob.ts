//expect object
function logperson(person2:tperson) {
    console.log(person2.name);
    
}

type tperson={
    name?:string,
    age:number,
    no:number
}
const person:tperson={
    name:"Hammad",
    age:23,
    no:1320
}

const person2:tperson={
    name : "ali",
    age :22,
    no:120
}
logperson(person2)
logperson(person)
