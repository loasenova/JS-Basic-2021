function vetParking(input){

    let days = Number(input[0]);
    let hours = Number(input[1]);
    let totalTax = 0;
    

    for(let day = 1; day <= days; day++){
        let tax = 0;
        for(let hour = 1; hour <= hours; hour++){
            if(day % 2 === 0){
                if(hour % 2 === 0){
                    tax += 1;
                }else{
                    tax += 2.50;
                }  
            }else{
                if(hour % 2 === 0){
                    tax += 1.25;
                }else{
                    tax += 1;
                }
            }
        }
        console.log(`Day: ${day} – ${tax.toFixed(2)} leva`);
        totalTax += tax;
        
    }
    console.log(`Total: ${totalTax.toFixed(2)} leva`)

}
vetParking([2,5])