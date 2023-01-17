function walking(input){

    let goal = 10000; 
    let index = 0;
    let command = input[index];
    index++;
    let count = 0;

    while(command !== "Going home"){
        let steps = Number(command);
        count += steps;

        if(count >= goal){
            break;
        }

        command = input[index];
        index++;
    }

    if(command === "Going home"){
        let steps = Number(input[index]);
        index++;
        count += steps;
    }

    let diff = Math.abs(count - goal);

    if(count >= goal){
        console.log("Goal reached! Good job!");
        console.log(`${diff} steps over the goal!`);
    }else{
        console.log(`${diff} more steps to reach goal.`);
    }
    
}
walking(["1500",
"3000",
"250",
"1548",
"2000",
"Going home",
"2000"])