function reportSystem(input){

    let index = 0;
    let amount = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let cash = 0;
    let cashTran = 0;
    let check = 0;
    let checkTran = 0;
    let count = 0;
    let total = 0;
    let isEnough = false;

    while(command !== "End"){

        let product = Number(command);
        count++;

        if(count % 2 !== 0){
            if(product > 100){
                console.log("Error in transaction!");
            }else{
                console.log("Product sold!");
                cash += product;
                cashTran++;
            }

        }else{
            if(product < 10){
                console.log("Error in transaction!"); 
            }else{
                console.log("Product sold!");
                check += product;
                checkTran++;
            }

        }

        total = check + cash;
        if(total >= amount){
            isEnough = true;
            let avgCash = cash / cashTran;
            let avgCheck = check / checkTran;
            console.log(`Average CS: ${avgCash.toFixed(2)}`);
            console.log(`Average CC: ${avgCheck.toFixed(2)}`);
            break;
        }



        command = input[index];
        index++;
    }

    if(!isEnough){
    console.log("Failed to collect required money for charity.")
}
}
reportSystem([600,
    86,
    150,
    98,
    227,
    "End"])