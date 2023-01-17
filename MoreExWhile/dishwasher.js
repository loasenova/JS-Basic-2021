function dishwasher(input){

    let index = 0;
    let bottles = Number(input[index]);
    index++;
    let command = input[index];
    index++; 
    let count = 0;
    let total = bottles * 750;
    let plates = 0;
    let pots = 0;
    let isEnough = true;

    while(command !== "End"){
        let dishes = Number(command);
        count++;

        if(count < 3){
            
            plates += dishes;
            total -= (dishes * 5);
        }else if(count === 3){
            count = 0;
            pots += dishes;
            total -= (dishes * 15);
        }

        if(total < 0){
            isEnough = false;
            console.log(`Not enough detergent, ${Math.abs(total)} ml. more necessary!`);
            break;
        }

        command = input[index];
        index++;

    }
    if(isEnough){
        console.log("Detergent was enough!");
        console.log(`${plates} dishes and ${pots} pots were washed.`);
        console.log(`Leftover detergent ${total} ml.`);
}

}
dishwasher([1,
    10,
    15,
    10,
    12,
    13,
    30])