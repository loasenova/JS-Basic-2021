function godzillaVsKong(input){

    let budget = Number(input[0]);
    let extras = Number(input[1]);
    let extraClothes = Number(input[2]);

    let decor = budget * 0.10;
    let extraClothesPrice = extras * extraClothes;

    if(extras > 150){
        extraClothesPrice = extraClothesPrice * 0.90;
    }

    let totalPrice = decor + extraClothesPrice;
    let diff = Math.abs(budget - totalPrice);

    if(totalPrice > budget){
        console.log("Not enough money!");
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`)
    }else{
        console.log("Action!");
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`)
    }
}
godzillaVsKong(["9587.88","222","55.68"])