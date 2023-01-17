function shopping(input){

    let budget = Number(input[0]);
    let videoCards = Number(input[1]);
    let processors = Number(input[2]);
    let ramMemory = Number(input[3]);

    let totalPrice = videoCards * 250 + (((videoCards * 250) * 0.35) * processors) + (((videoCards * 250) * 0.10) * ramMemory);

    if(videoCards > processors){

        totalPrice = totalPrice * 0.85;
    }

    let deff = Math.abs(budget - totalPrice);

    if(budget >= totalPrice){
        
        console.log(`You have ${deff.toFixed(2)} leva left!`)
    }else{

        console.log(`Not enough money! You need ${deff.toFixed(2)} leva more!`)
    }
}
shopping(["920.45",
"3",
"1",
"1"])