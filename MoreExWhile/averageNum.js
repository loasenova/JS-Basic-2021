function averageNum(input){
    let index = 0;
    let nums = Number(input[index]);
    index++;
    let sum = 0;
    
    for(let i = 0; i<nums; i++){
        let num = Number(input[index]);
        index++;
        sum +=num;

    }
    let total = sum/nums;
    console.log(total.toFixed(2));
}
averageNum([3, 82, 43, 22])