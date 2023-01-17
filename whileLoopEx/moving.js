function moving(input){

    let index = 0;
    let w = Number(input[index]);
    index++;
    let l = Number(input[index]);
    index++;
    let h = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let total = w * l * h;
    let isSpaceEnough = true;

    while(command !== "Done"){
        let boxes = Number(command);
        total -= boxes;

        if(total < 0){
            isSpaceEnough = false;
            console.log(`No more free space! You need ${Math.abs(total)} Cubic meters more.`);
            break;
        }
    
        command = input[index];
        index++;

    }
    if(isSpaceEnough){
        console.log(`${total} Cubic meters left.`)
    }
}
moving(["10", 
"10",
"2",
"20",
"20",
"20",
"20",
"122"])