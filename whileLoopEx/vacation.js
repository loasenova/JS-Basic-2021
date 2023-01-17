function vacation(input){

    let index = 0;
    let neededMoney = Number(input[index]);
    index++;
    let budget = Number(input[index]);
    index++;
    let count = 0; 
    let days = 0;
    let isSaveMoney = true;

    while(budget < neededMoney){
        days++;
        let option = input[index];
        index++;
        let money = Number(input[index]);
        index++;

        if(option === "save"){
            count = 0;
            budget += money;

        }else{
            count++;
            budget -= money;
            if(budget < 0){
                budget = 0;
            }
        }
            if (count === 5){
                isSaveMoney = false;
                console.log("You can't save the money.");
                console.log(`${days}`);
                break;
            }
    }
    if(isSaveMoney){
        console.log(`You saved the money for ${days} days.`)
    }
}
vacation(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])