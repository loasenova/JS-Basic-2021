function accountBalance(input){

    let index = 0;
    let deposit = input[index];
    index++;
    let totalSum = 0;

    while(deposit !== "NoMoreMoney"){
        let amount = Number(deposit);
        if(amount < 0){
            console.log("Invalid operation!")
            break;
        }
        totalSum += amount;
        console.log(`Increase: ${amount.toFixed(2)}`);
        deposit = input[index];
        index++;  
        
    }
    console.log(`Total: ${totalSum.toFixed(2)}`)

}
accountBalance(["120",
"45.55",
"-150"])