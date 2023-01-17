function worldSwimmingRecord(input){

    let recordTime = Number(input[0]);
    let metres = Number(input[1]);
    let secFor1m = Number(input[2]);

    let waterResistance = Math.floor(metres / 15) * 12.5;
    let swimmingTime = metres * secFor1m;
    let totalTime = swimmingTime + waterResistance;

    if(totalTime < recordTime){

        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    }else{

        let deff = totalTime - recordTime;
        console.log(`No, he failed! He was ${deff.toFixed(2)} seconds slower.`)
    } 
    
}
worldSwimmingRecord(["55555.67",
"3017",
"5.03"])