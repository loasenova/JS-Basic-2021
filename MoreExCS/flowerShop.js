function flowerShop(input){

    let magnolias = Number(input[0]);
    let hyacinths = Number(input[1]);
    let roses = Number(input[2]);
    let cacti = Number(input[3]);
    let price = Number(input[4]);

    let magnoliasPrice = magnolias * 3.25;
    let hyacinthsPrice = hyacinths * 4;
    let rosesPrice = roses * 3.50;
    let cactiPrice = cacti * 8;

    let totalPrice = (magnoliasPrice + hyacinthsPrice + rosesPrice + cactiPrice);
    let finalPrice = totalPrice * 0.95;
    let diff = Math.abs(price - finalPrice);

    if(finalPrice >= price){
        console.log(`She is left with ${Math.floor(diff)} leva.`);
    }else{
        console.log(`She will have to borrow ${Math.ceil(diff)} leva.`)
    }
}
flowerShop([2,3,5,1,50])