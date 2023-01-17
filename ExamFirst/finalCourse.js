function finalCourse(input){

    let dancers = Number(input[0]);
    let points = Number(input[1]);
    let season = input[2];
    let place = input[3];
    let price = dancers * points;

    switch(place){
        case "Bulgaria":
           
            if(season === "summer"){
                price = price * 0.95;
            }else{
                price = price * 0.92;
            };
            break;
        case "Abroad":
            price += price / 2 ;
            if(season === "summer"){
                price = price * 0.9;
            }else{
                price = price * 0.85;
            };
            break;
    }

    let charity = price * 0.75;
    let currMoney = price - charity;
    let moneyPerDancer = currMoney / dancers;

    console.log(`Charity - ${charity.toFixed(2)}`);
    console.log(`Money per dancer - ${moneyPerDancer.toFixed(2)}`);

}

finalCourse(["25",
"98",
"winter",
"Bulgaria"])