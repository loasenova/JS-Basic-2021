function trainTheTrainers(input){

    let index = 0;
    let people = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let finalGrade = 0;
    let count = 0;
    
    
    while(command !== "Finish"){
        let presentation = command;
        let totalForPres = 0;
        for(let i = 1; i <= people; i++){
            count++;
            let grade = Number(input[index]);
            index++;
            totalForPres += grade; 
            finalGrade += grade;   
        }

        let avgForPres = totalForPres / people;
        console.log(`${presentation} - ${avgForPres.toFixed(2)}.`)
        command = input[index];
        index++;
    }

    let avgGrade = finalGrade / count;
    console.log(`Student's final assessment is ${avgGrade.toFixed(2)}.`)

}
trainTheTrainers(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"])