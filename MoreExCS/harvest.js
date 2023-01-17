function harvest(input){

    let x = Number(input[0]);
    let y = Number(input[1]);
    let z = Number(input[2]);
    let workers = Number(input[3]);

    let totalGrapes = x * y;
    let wine = (totalGrapes * 0.40) / 2.5;
    let diff = Math.abs(wine - z);
    let wineForWorker = diff / workers;

    if(wine < z){
        console.log(`It will be a tough winter! More ${Math.floor(diff)} liters wine needed.`);
    }else{
        console.log(`Good harvest this year! Total wine: ${Math.floor(wine)} liters.`);
        console.log(`${Math.ceil(diff)} liters left -> ${Math.ceil(wineForWorker)} liters per person.`)
    }
}
harvest([1020,
    1.5,
    425,
    4])