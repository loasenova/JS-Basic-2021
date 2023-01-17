function matchTickets(input){

    let budget = Number(input[0]);
    let category = input[1];
    let numPeople = Number(input[2]);

    let transportBudget = 0;

    if(numPeople >= 1 && numPeople <= 4){
        transportBudget = budget * 0.75;
    }else if(numPeople >=5 && numPeople <=9){
        transportBudget = budget * 0.60;
    }else if(numPeople >= 10 && numPeople <=24){
        transportBudget = budget * 0.50;
    }else if(numPeople >= 25 && numPeople <= 49){
        transportBudget = budget * 0.40;
    }else{
        transportBudget = budget * 0.25;
    }

    let diff = Math.abs(budget - transportBudget);
    let ticketsPrice = 0;

    if(category === "Normal"){
        ticketsPrice = numPeople * 249.99;
    }else{
        ticketsPrice = numPeople * 499.99;
    }

    let diff2 = Math.abs(diff - ticketsPrice);

    if(diff >= ticketsPrice){
        console.log(`Yes! You have ${diff2.toFixed(2)} leva left.`)
    }else{
        console.log(`Not enough money! You need ${diff2.toFixed(2)} leva.`)
    }
}
matchTickets([30000,
    "VIP",
    49])