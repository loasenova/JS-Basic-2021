function hotelRoom(input){

    let month = input[0];
    let nights = Number(input[1]);
    let priceForStudio = 0;
    let priceForAp = 0;

    switch(month){
        case "May":
        case "October":
            if(nights > 14){
                priceForStudio = nights * (50 * 0.70);
                priceForAp = nights * (65 * 0.90);
            }else if(nights > 7){
                priceForStudio = nights * (50 * 0.95);
                priceForAp = nights * 65;
            }else{
                priceForAp = nights * 65;
                priceForStudio = nights * 50;
            }
            break;
        case "June":
        case "September":
            if(nights > 14){
                priceForStudio = nights * (75.20 * 0.80);
                priceForAp = nights *(68.70 * 0.90);  
            }else{
                priceForAp = nights * 68.70;
                priceForStudio = nights * 75.20;
            }
            break;
        case "July":
        case "August":
                if(nights > 14){
                    priceForAp = nights * (77 * 0.90);
                    priceForStudio = nights * 76;
                }else{
                    priceForStudio = nights * 76;
                    priceForAp = nights * 77;
                }
            break;
    }
   
    console.log(`Apartment: ${priceForAp.toFixed(2)} lv.`)
    console.log(`Studio: ${priceForStudio.toFixed(2)} lv.`)
}
hotelRoom(["June",
"14"])