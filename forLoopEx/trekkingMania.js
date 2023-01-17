function trekkingMania(input){

    let index = 0;
    let groupsCount = Number(input[index]);
    index++;
    let totalClimbers = 0;
   

    let musala = 0;
    let monblan = 0;
    let kilimandjaro = 0;
    let k2 = 0;
    let everest = 0;
    

    for(let i = 0; i < groupsCount; i++){
        let climbers = Number(input[index]);
        index++;
        totalClimbers += climbers;
        
            if(climbers <= 5){
                musala += climbers;
            }else if(climbers >= 6 && climbers <= 12){
                monblan += climbers;
            }else if(climbers >= 13 && climbers <= 25){
                kilimandjaro += climbers;
            }else if(climbers >= 26 && climbers <= 40){
                k2 += climbers;
            }else{
                everest += climbers;
            }
        }

        let perMusala = (musala / totalClimbers) * 100;
        console.log(`${perMusala.toFixed(2)}%`);
        let perMonblan = (monblan / totalClimbers) * 100;
        console.log(`${perMonblan.toFixed(2)}%`);
        let perKilimandjaro = (kilimandjaro / totalClimbers) * 100;
        console.log(`${perKilimandjaro.toFixed(2)}%`);
        let perK2 = (k2 / totalClimbers) * 100;
        console.log(`${perK2.toFixed(2)}%`);
        let perEverest = (everest / totalClimbers) * 100;
        console.log(`${perEverest.toFixed(2)}%`);

}
trekkingMania(["5",
"25",
"41",
"31",
"250",
"6"])