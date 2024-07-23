// charAt()
// Returns the character at the specified index.
let a :string = "HElllo"
let b :string = a.charAt(1)
console.log(b);



// charCodeAt()
// Returns a number indicating the Unicode value of the character at the given index. 
// returns ascii number
let c :number = a.charCodeAt(5)
console.log(c);


// concat()
// Combines the text of two strings and returns a new string.
let d :string = "world"
let e :string = a.concat(d,"hi")
console.log(e);


// indexOf()
// Returns the index within the calling String object of the 
// first occurrence of the specified value, or -1 if not found
let f :number = a.indexOf("p")
console.log(f);  ///if found returns index else -1

// toUpperCase()
// Returns the calling string value converted to uppercase.

console.log(a.toUpperCase());

// toUpperCase()
// Returns the calling string value converted to uppercase.


console.log(a.toLowerCase());

