function journey(input){

    let budget = Number(input[0]);
    let season = input[1];

    let destination;
    let price = 0;
    let vacation;

    if(budget <= 100){
        destination = "Bulgaria";
        if(season === "summer"){
            price = budget * 0.30;
        }else{
            price = budget * 0.70;
        }
    }else if(budget <= 1000){
            destination = "Balkans";
        if(season === "summer"){
            price = budget * 0.40;
        }else{
            price = budget * 0.80;
        }
    }else if(budget > 1000){
        destination = "Europe";
        price = budget * 0.90;
    }
    console.log(`Somewhere in ${destination}`);
    if(season === "summer" && destination !== "Europe"){
        vacation = "Camp"
        console.log(`${vacation} - ${price.toFixed(2)}`);
    }else{
        vacation = "Hotel";
        console.log(`${vacation} - ${price.toFixed(2)}`);
    } 
}
journey(["1500", "summer"])