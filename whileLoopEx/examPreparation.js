function examPreparation(input){

    let index = 0;
    let poorGrades = Number(input[index]);
    index++;
    let task = input[index];
    index++;
    let poor = 0;
    let good = 0;
    let count = 0;
    let isPoor = false;
    

    while(task !== "Enough"){
        let grade = Number(input[index]);
        index++;
        if(grade <= 4){
            count += grade;
            poor++;
            if(poor === poorGrades){
                isPoor = true;
                console.log(`You need a break, ${poorGrades} poor grades.`);
                break;
            }

        }else{
            count += grade;
            good++;
        }

        task = input[index];
        index++;
    }
        if(!isPoor){
        let lastTask = input[index-3];
        let average = count / (poor + good);
        console.log(`Average score: ${average.toFixed(2)}`);
        console.log(`Number of problems: ${poor + good}`);
        console.log(`Last problem: ${lastTask}`);
        }
    
}
examPreparation(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])