function sleepyTomCat(input){

    let freeDays = Number(input[0]);

    let workingDays = 365 - freeDays;
    let timeForPlay = (freeDays * 127) + (workingDays * 63);
    let diff = Math.abs(timeForPlay - 30000);
    let timeHours = Math.floor(diff / 60);
    let timeMin = diff % 60;

    if(timeForPlay > 30000){

        console.log("Tom will run away");
        console.log(`${timeHours} hours and ${timeMin} minutes more for play`);
    }else{
        console.log("Tom sleeps well");
        console.log(`${timeHours} hours and ${timeMin} minutes less for play`);
    }
}
sleepyTomCat(["113"])