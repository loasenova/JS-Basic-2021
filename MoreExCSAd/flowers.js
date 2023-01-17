function flowers(input){

    let chrysanthemums = Number(input[0]);
    let roses = Number(input[1]);
    let tulips = Number(input[2]);
    let season = input[3];
    let day = input[4];

    let chrysanthemumsPrice = 0;
    let rosesPrice = 0;
    let tulipsPrice = 0;
    let totalPrice = 0;
    

    switch(season){
        
        case "Spring":
            chrysanthemumsPrice = chrysanthemums * 2.00;
            rosesPrice = roses * 4.10;
            tulipsPrice = tulips * 2.50;
            totalPrice = chrysanthemumsPrice + rosesPrice + tulipsPrice;
            if(day === "Y"){
                if(tulips >= 7){
                    if((chrysanthemums + roses + tulips) > 20){
                        totalPrice = ((totalPrice * 1.15) * 0.95) * 0.80 + 2;
                    }else{
                        totalPrice = (totalPrice * 1.15) * 0.95 + 2;
                    }
                }else{
                    totalPrice = totalPrice * 1.15 + 2;
                }
            }else{
                if((chrysanthemums + roses + tulips) > 20){
                    totalPrice = (totalPrice * 0.80) + 2;
                }else{
                    totalPrice = totalPrice + 2;
                }
            }
            ;break;
        case "Summer":
            chrysanthemumsPrice = chrysanthemums * 2.00;
            rosesPrice = roses * 4.10;
            tulipsPrice = tulips * 2.50;
            totalPrice = chrysanthemumsPrice + rosesPrice + tulipsPrice;
            if(day === "Y"){
                if((chrysanthemums + roses + tulips) > 20){
                    totalPrice = (totalPrice * 1.15) * 0.80 + 2;
                }else{
                    totalPrice = totalPrice * 1.15 + 2;
                }
            }else{
                if((chrysanthemums + roses + tulips) > 20){
                    totalPrice = (totalPrice * 0.80) + 2;
                }else{
                    totalPrice = totalPrice + 2;
                }
            }
            ;break;
        case "Autumn":
            chrysanthemumsPrice = chrysanthemums * 3.75;
            rosesPrice = roses * 4.50;
            tulipsPrice = tulips * 4.15;
            totalPrice = chrysanthemumsPrice + rosesPrice + tulipsPrice;
            if(day === "Y"){
                if((chrysanthemums + roses + tulips) > 20){
                    totalPrice = (totalPrice * 1.15) * 0.80 + 2;
                }else{
                    totalPrice = totalPrice * 1.15 + 2;
                }
            }else{
                if((chrysanthemums + roses + tulips) > 20){
                    totalPrice = (totalPrice * 0.80) + 2;
                }else{
                    totalPrice = totalPrice + 2;
                }
            }
            ;break;
        case "Winter":
            chrysanthemumsPrice = chrysanthemums * 3.75;
            rosesPrice = roses * 4.50;
            tulipsPrice = tulips * 4.15;
            totalPrice = chrysanthemumsPrice + rosesPrice + tulipsPrice;
            if(day === "Y"){
                if(roses >= 10){
                    if((chrysanthemums + roses + tulips) > 20){
                        totalPrice = ((totalPrice * 1.15) * 0.90) * 0.80 + 2;
                    }else{
                        totalPrice = (totalPrice * 1.15) * 0.90 + 2;
                    }
                }else{
                    totalPrice = (totalPrice * 1.15) + 2;
                }
            }else{
                if(roses >= 10){
                    if((chrysanthemums + roses + tulips) > 20){
                        totalPrice = (totalPrice * 0.90) * 0.80 + 2;
                    }else{
                        totalPrice = totalPrice * 0.90 + 2;
                }
                }else{
                    totalPrice = totalPrice + 2;
                } 
            }
            ;break;
    }
    
    console.log(`${totalPrice.toFixed(2)}`);
}
flowers([10,
    10,
    10,
    "Autumn",
    "N"])