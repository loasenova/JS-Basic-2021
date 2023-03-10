function toyShop(input){

    let trip = Number(input[0]);
    let puzzles = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let toys = puzzles + dolls + bears + minions + trucks;
    let toysPrice = puzzles * 2.60 + dolls * 3 + bears * 4.10 + minions * 8.20 + trucks * 2;

    if(toys >= 50){
        toysPrice = toysPrice * 0.75;
    }

    toysPrice = toysPrice * 0.90;
    let diff = Math.abs(toysPrice - trip);

    if(toysPrice >= trip){
        console.log(`Yes! ${diff.toFixed(2)} lv left.`)
    
    }else{
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`)
    }

}
toyShop(["40.8","20","25","30","50","10"])