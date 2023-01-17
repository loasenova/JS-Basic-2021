function tab(input){

    let index = 0; 
    let num = Number(input[index]);
    index++;
     
    let firstNum = num % 10;
    let secNumber = num % 100;
    let secNum = Math.floor(secNumber / 10);
    let thirdNum = Math.floor(num / 100);

    for(let i = 1; i <= firstNum; i++){
        for(let j = 1; j <= secNum; j++){
            for(let k = 1; k <= thirdNum; k++){
                console.log(`${i} * ${j} * ${k} = ${i * j * k}`);
            }
        }
    }

}
tab([222])