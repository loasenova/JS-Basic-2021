function sumOfNum(input){

    let num = Number(input[0]);
    let index = 1;
    let sum = 0;


    while(num > sum){
        
        let currentNum = Number(input[index]);
        sum += currentNum;
        index++;

    }
    console.log(sum);
}
sumOfNum(["100",
"10",
"20",
"30",
"40"])