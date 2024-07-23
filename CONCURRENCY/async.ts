function a() {
    console.log("Hello World!");
    
}
setTimeout(a,4000)
setTimeout(() => {
    console.log("Hi");
    
}, 2000);