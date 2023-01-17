function skiTrip(input){

    let days = Number(input[0]);
    let room = input[1];
    let rating = input[2];

    let roomForOnePriceForDay = 18;
    let apartmentPriceForDay = 25;
    let presidentApPriceForDay = 35;
    let price;

    switch(room){
        case "room for one person":
            price = (days - 1) * roomForOnePriceForDay;
            break;
        case "apartment":
            if(days < 10){
                price = ((days - 1) * apartmentPriceForDay) * 0.70;
            }else if(days >= 10 && days <= 15){
                price = ((days - 1) * apartmentPriceForDay) * 0.65;
            }else{
                price = ((days - 1) * apartmentPriceForDay) * 0.50;
            }
            break;
        case "president apartment":
            if(days < 10){
                price = ((days - 1) * presidentApPriceForDay) * 0.90;
            }else if(days >= 10 && days <= 15){
                price = ((days - 1) * presidentApPriceForDay) * 0.85;
            }else{
                price = ((days - 1) * presidentApPriceForDay) * 0.80;
            }
            break;
        }

        if(rating === "positive"){
            price = price + (price * 0.25);
        }else{
            price = price - (price * 0.10);
        }

        console.log(price.toFixed(2));

}
skiTrip(["2",
"apartment",
"positive"])