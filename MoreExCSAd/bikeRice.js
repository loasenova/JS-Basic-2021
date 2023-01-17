function bikeRice(input){

    let countJuniors = Number(input[0]);
    let countSeniors = Number(input[1]);
    let route = input[2];

    let tax = 0;

    switch(route){
        case "trail":
            tax = (countJuniors * 5.50) + (countSeniors * 7)
            ;break;
        case "cross-country":
            if((countJuniors + countSeniors) >= 50){
                tax = ((countJuniors * 8) + (countSeniors * 9.50)) * 0.75;
            }else{
                tax = (countJuniors * 8) + (countSeniors * 9.50);
            }
            ;break;
        case "downhill":
            tax = (countJuniors * 12.25) + (countSeniors * 13.75)
            ;break;
        case "road":
            tax = (countJuniors * 20) + (countSeniors * 21.50)
            ;break;
    }

    let taxWithoutCosts = tax * 0.95;
    console.log(taxWithoutCosts.toFixed(2));
}
bikeRice([3,
    40,
    "road"])