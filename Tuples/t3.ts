type stafftype = [string, number]
const staff: stafftype[] = [["Ali", 23], ["Hadi", 24], ["Umer", 26]]


type paytype = [stafftype, ...number[]]
const pay: paytype[] = [[staff[0], 250, 2253], [staff[1], 250, 256, 2465], [staff[2], 2500, 65, 9663]]

function payed (){
    let pay1 : any[]=pay[0].slice(1)
    let totalSum: number = pay1.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    console.log("The sum of the numbers is:", totalSum);
}