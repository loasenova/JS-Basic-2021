function depositCalculator(input){

    let deposit = Number(input[0]);
    let depositTime = Number(input[1]);
    let interest = Number(input[2]);

    let amount = deposit + depositTime * (deposit * (interest/100) / 12);

    console.log(amount);
}
depositCalculator(["2350", "6", "7"])