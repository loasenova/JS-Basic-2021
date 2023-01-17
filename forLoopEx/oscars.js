function oscars(input){

    let index = 0;
    let name = input[index];
    index++;
    let academyPoints = Number(input[index]);
    index++;
    let countEvaluators = Number(input[index]);
    index++;

    let points = academyPoints;
    let isGetNominee = false;

    for(let i = 0; i < countEvaluators; i++){
        let evaluatorName = input[index];
        index++;
        let evaluatorPoints = Number(input[index]);
        index++;
        points += (evaluatorName.length * evaluatorPoints) / 2; 

        if(points >= 1250.5){
            console.log(`Congratulations, ${name} got a nominee for leading role with ${points.toFixed(1)}!`);
            isGetNominee = true;
            break;
        }
    }

    let diff = Math.abs(1250.5 - points);
    if(!isGetNominee){
        console.log(`Sorry, ${name} you need ${diff.toFixed(1)} more!`);
    }
}
oscars(["Zahari Baharov",
"205",
"4",
"Johnny Depp",
"45",
"Will Smith",
"29",
"Jet Lee",
"10",
"Matthew Mcconaughey",
"39"])