function tennisRanklist(input){

    let index = 0;
    let countTournaments = Number(input[index]);
    index++;
    let startPoints = Number(input[index]);
    index++;

    let points = 0;
    let wins = 0;

    for(let i = 0; i < countTournaments; i++){
        let result = input[index];
        index++;
        if(result === "W"){
            wins++;
            points += 2000;
        }else if(result === "F"){
            points += 1200;
        }else{
            points += 720;
        }
    }

    let finalPoints = startPoints + points;
    console.log(`Final points: ${finalPoints}`);
    let avgPoints = Math.floor(points / countTournaments);
    console.log(`Average points: ${avgPoints}`);
    let percentWin =  wins / countTournaments * 100;
    console.log(`${percentWin.toFixed(2)}%`)

}
tennisRanklist(["4",
"750",
"SF",
"W",
"SF",
"W"])