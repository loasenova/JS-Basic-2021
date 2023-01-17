function firm(input){

    let hours = Number(input[0]);
    let days = Number(input[1]);
    let workers = Number(input[2]);

    let workingHours = (days * 0.90) * 8;
    let overtime = workers * (2 * days);
    let totalTime = Math.floor(workingHours + overtime);
    let diff = Math.abs(totalTime - hours);

    if(totalTime >= hours){
        console.log(`Yes!${diff} hours left.`);
    }else{
        console.log(`Not enough time!${diff} hours needed.`);
    }
}
firm([90,7,3])
