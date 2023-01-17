function fuelTank2(input){

    let fuel = input[0];
    let liters = Number(input[1]);
    let discount = input[2];

    let gasolinePrice = 0;
    let dieselPrice = 0;
    let gasPrice = 0;

    
        switch(fuel){
            case "Gasoline":
                if(liters >= 20 && liters <= 25){
                    if(discount === "Yes"){
                        gasolinePrice = (liters * (2.22 - 0.18)) * 0.92;
                    }else{
                        gasolinePrice = (liters * 2.22) * 0.92;
                    }
                }else if(liters > 25){
                    if(discount === "Yes"){
                    gasolinePrice = (liters * (2.22 - 0.18)) * 0.90;
                    }else{
                        gasolinePrice = (liters * 2.22) * 0.90;
                    }
                }else{
                    if(discount === "Yes"){
                        gasolinePrice = liters * (2.22 - 0.18);
                    }else{
                        gasolinePrice = (liters * 2.22);
                    }
                }
                        console.log(`${gasolinePrice.toFixed(2)} lv.`);break;
                    

            case "Diesel":
                if(liters >= 20 && liters <= 25){
                    if(discount === "Yes"){
                        dieselPrice = (liters * (2.33 - 0.12)) * 0.92;
                    }else{
                        dieselPrice = (liters * 2.33) * 0.92;
                    }
                }else if(liters > 25){
                    if(discount === "Yes"){
                    dieselPrice = (liters * (2.33 - 0.12)) * 0.90;
                    }else{
                        dieselPrice = (liters * 2.33) * 0.90;
                    }
                }else{
                    if(discount === "Yes"){
                        liters * (2.33 - 0.12);
                    }else{
                    dieselPrice = (liters * 2.33);
                    }
                }
            
                console.log(`${dieselPrice.toFixed(2)} lv.`);break;

            case "Gas":
                if(liters >= 20 && liters <= 25){
                    if(discount === "Yes"){
                        gasPrice = (liters * (0.93 - 0.08)) * 0.92;
                    }else{
                        gasPrice = (liters * 0.93) * 0.92;
                    }
                }else if(liters > 25){
                    if(discount === "Yes"){
                        gasPrice = (liters * (0.93 - 0.08)) * 0.90;
                    }else{
                        gasPrice = (liters * 0.93) * 0.90;
                    }
                }else{
                    if(discount === "Yes"){
                        liters * (0.93 - 0.08);
                    }else{
                    gasPrice = (liters * 0.93);
                    }
                }
                console.log(`${gasPrice.toFixed(2)} lv.`);break;
        }
}
fuelTank2(["Gas",30,"Yes"])