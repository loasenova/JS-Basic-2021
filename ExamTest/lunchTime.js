function lunchTime(input){

    let movie = input[0];
    let movieTime = Number(input[1]);
    let breakTime = Number(input[2]);

    let lunchTime = breakTime / 8;
    let freeTime = breakTime / 4;

    let totalTime = movieTime + lunchTime + freeTime;
    let diff = Math.abs(breakTime - totalTime);
    if(totalTime <= breakTime){
        console.log(`You have enough time to watch ${movie} and left with ${Math.ceil(diff)} minutes free time.`)
    }else{
        console.log(`You don't have enough time to watch ${movie}, you need ${Math.ceil(diff)} more minutes.`)
    }
}
lunchTime(["Game of Thrones", 48, 60])