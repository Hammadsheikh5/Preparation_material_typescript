//type annotation in object
let car: { 
    model: string;  //type annotation
    year: number;
    sell: boolean;
    colours: string[];
    method: () => number;    //void mean we dont know what return the value
} = {
    model: "corolla",  //string
    year: 2020,          //number
    sell: true,            //boolean
    colours: ["red", "green", "blue"],       //array
    method: () => {
        console.log("This is run faast");
        return 2+6
                  }                   //function
}
console.log(car);

