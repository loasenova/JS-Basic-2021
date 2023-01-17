function football(input){

    let shirtPrice = Number(input[0]);
    let budget = Number(input[1]);

    let shortsPrice = shirtPrice * 0.75;
   
    let socksPrice = shortsPrice * 0.20;
    
    let shoesPrice = (shirtPrice + shortsPrice) * 2;
    

    let priceDiss = (shirtPrice + shortsPrice + socksPrice + shoesPrice) * 0.85;
   
    let diff = budget - priceDiss;

    if(priceDiss >= budget){
        console.log("Yes, he will earn the world-cup replica ball!");
        console.log(`His sum is ${priceDiss.toFixed(2)} lv.`)
    }else{
        
        console.log("No, he will not earn the world-cup replica ball.");
        console.log(`He needs ${diff.toFixed(2)} lv. more.`)
    }

}
football(["25",
"100"])