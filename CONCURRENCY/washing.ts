function washing(callback:()=>void) {
    console.log("Washing  started...");
    setTimeout(() => {
        console.log("Washing done");
        callback()
    }, 5000);
}
function soaking(callback:()=>void) {
    console.log("soaking  started...");
    setTimeout(() => {
        console.log("soaking done");
        callback()
    }, 3000);
}
function drying() {
    console.log("drying started...");
    setTimeout(() => {
        console.log("drying done");
        
    }, 2000);
}
washing(()=>{
    soaking(()=>{
        drying()
    })
})

