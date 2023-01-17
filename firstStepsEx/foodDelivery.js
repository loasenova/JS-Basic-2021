function foodDelivery(input){

    let chikenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let vegMenu = Number(input[2]);
    
    let sum = chikenMenu * 10.35 + fishMenu * 12.40 + vegMenu * 8.15;
    let totalsum = sum + sum * 0.20;
    let sumWithDelivery = totalsum + 2.50;

    console.log(sumWithDelivery);

}
foodDelivery(["9","2","6"])