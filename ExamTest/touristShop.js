function touristShop(input){

    index = 0;
    let budget = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let count = 0;
    let totalPrice = 0;
    let isEnoughBudget = true;

    while(command !== "Stop"){
        let product = command;
        let price = Number(input[index]);
        index++;

        count++;
        

        if(count % 3 === 0
            ){
            price = price / 2;
        }

        totalPrice += price;
        budget -= price;

        if(budget < 0){
            isEnoughBudget = false;
            console.log("You don't have enough money!");
            console.log(`You need ${Math.abs(budget).toFixed(2)} leva!`);
            break;
        }

        if(price > budget){
            break;
        }

        

        command = input[index];
        index++;
    }

    if(isEnoughBudget){
        console.log(`You bought ${count} products for ${totalPrice.toFixed(2)} leva.`)
    }

}
touristShop([153.20,
    "Backpack",
    25.20,
    "Shoes",
    54,
    "Sunglasses",
    30,
    "Stop"
    ])