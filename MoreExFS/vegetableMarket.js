function vegetableMarket(input){

    let vegPrice = Number(input[0]);
    let fruitsPrice = Number(input[1]);
    let vegKg = Number(input[2]);
    let fruitsKg = Number(input[3]);

    let total = ((vegPrice * vegKg) + (fruitsPrice * fruitsKg)) / 1.94;

    console.log(total.toFixed(2));
}
vegetableMarket(["0.194",
"19.4",
"10",
"10"])