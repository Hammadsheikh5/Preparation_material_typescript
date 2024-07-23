// An index signature in TypeScript is used when you don't know the exact names of the properties but you know the shape of the values.
//  It allows an object to have properties with arbitrary names and a defined type for the values.

//with the hjelp of index signature we can define key types
//type annotation in object
 const age :{
    [key : string] : number  //index signature
 }={
    first : 23,
    second :25,
    third : 26,
    fourth :27
 }

 //using type union in index signature
 const age2 :{
    [key : string] : number |string  //index signature 
 }={                //type union
    first : 23,
    second :25,
    third : 26,
    fourth :27,
    fifth : "Twenty"
 }