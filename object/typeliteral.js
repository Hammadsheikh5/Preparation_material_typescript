// typescript allows you to specify exact values that a varaiable can hold using type literals
var size;
size = "mega";
size = "medium";
size = "small";
// size = "big"  //error (Type '"big"' is not assignable to type '"mega" | "small" | "medium"')