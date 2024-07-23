// const promise = new Promise((resolve,reject)=>{
//     resolve("Sucess!!!")
//     reject("Failure>>")
// })
// promise.then((value)=>{
//     console.log(value);
// })
// promise.catch((value)=>{
//     console.log(value);
// })
const returnmoney = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("Money Returned")
        reject("Failure");
    }, 3000);
});
//chainig two method like(if else)
returnmoney.then((value) => {
    console.log(value);
    console.log("Thank for return money");
}).catch((value) => {
    console.log(value);
    console.log("Why");
});
export {};
