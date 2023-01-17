function lunchBreak(input){

    let series = input[0];
    let episodTime = Number(input[1]);
    let breakTime = Number(input[2]);

    let lunchTime = breakTime / 8;
    let relaxTime = breakTime / 4;

    let totalTime = episodTime + lunchTime + relaxTime;
    let deff = Math.ceil(Math.abs(breakTime - totalTime));

    if(breakTime >= totalTime){

        console.log(`You have enough time to watch ${series} and left with ${deff} minutes free time.`)
    }else{
        console.log(`You don't have enough time to watch ${series}, you need ${deff} more minutes.`)
    }

}
lunchBreak(["Teen Wolf",
"48",
"60"])