function pets(input){

    let days = Number(input[0]);
    let foodKg = Number(input[1]);
    let dogFoodPerDay = Number(input[2]);
    let catFoodPerDay = Number(input[3]);
    let turtleFoodPerDay = Number(input[4]);

    let turtleFoodKg = turtleFoodPerDay / 1000;
    let totalFood = days * ( dogFoodPerDay + catFoodPerDay + turtleFoodKg);
    let diff = Math.abs(totalFood - foodKg);

    if(foodKg >= totalFood){
        console.log(`${Math.floor(diff)} kilos of food left.`)
    }else{
        console.log(`${Math.ceil(diff)} more kilos of food are needed.`)
    }
}
pets([5,10,2.1,0.8,321])