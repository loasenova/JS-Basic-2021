function grandpaStavri(input){

    let index = 0;
    let days = Number(input[index]);
    index++;
    let total = 0;
    let liters = 0;
    let totalDigrees = 0;

    for(let i = 0 ; i < days; i++){

        let rakiqL = Number(input[index]);
        index++;
        let degrees = Number(input[index]);
        index++;

        liters += rakiqL;
        total += rakiqL * degrees;
        
    }

    totalDigrees = total / liters;
    console.log(`Liter: ${liters.toFixed(2)}`);
    console.log(`Degrees: ${totalDigrees.toFixed(2)}`);

    if(totalDigrees < 38){
        console.log("Not good, you should baking!");
    }else if(totalDigrees >= 38 && totalDigrees <= 42){
        console.log("Super!");
    }else if(totalDigrees > 42){
        console.log("Dilution with distilled water!");
    }
}
grandpaStavri(["2",
"200",
"43",
"200",
"40"])
