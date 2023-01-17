function minNum(input){

    let element = input[0];
    let min = Number.MAX_SAFE_INTEGER;
    let index = 1;

    while(element !== "Stop"){
        let num = Number(element);
        if(num < min){
            min = num;
        }
        element = input[index];
        index++;
    }
    console.log(min);
}
minNum(["-10",
"20",
"-30",
"Stop"])