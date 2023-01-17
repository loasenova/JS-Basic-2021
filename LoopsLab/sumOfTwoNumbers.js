function sumOfTwoNumbers(input){

    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNum = Number(input[2]);

    let count = 0;
    let isNotFound = true;

    for(let i = start; i <= end; i++){
        for(let j = start; j <= end; j++){
            count++;
            if(i + j === magicNum){
                isNotFound = false;
                console.log(`Combination N:${count} (${i} + ${j} = ${magicNum})`);
                return;
            }
        }
    }
    if(isNotFound){
        console.log(`${count} combinations - neither equals ${magicNum}`);
    }
}
sumOfTwoNumbers([88,888,2000])