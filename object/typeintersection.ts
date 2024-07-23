// In TypeScript, an intersection type combines multiple types into one
// syntax
// type intersepted_Type = Type1 & Type2;

type type1 = {
    bookid : number,
    bookname : string
}
type type2 = {
    authorID : number,
    authorname : string
}

type completeType = type1 & type2;
const fullobject : completeType = {
    bookid : 123,
    bookname : "Green",
    authorID : 256,
    authorname : "Harry"
}
