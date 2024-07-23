function processinput(abc:(name:string)=>void) {
    abc("Hammad")
}
processinput(
    function (name:string) {
        console.log(`Name ${name}`);
        
    }
)