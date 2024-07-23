let a : number = 120
while(true){
    
    console.log(a--);
    if (a>-120) {

        continue
    }
    
    console.log("wait");
    
    
    if (a<=0) {
        console.log("Number end");
        
        break
    }
}