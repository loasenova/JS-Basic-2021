function specialNumbers(input){

    let n = Number(input[0]);
    let specialNumbersString = "";

    for(let a = 1; a < 10; a++){
        for(let b = 1; b < 10; b++){
            for(let c = 1; c < 10; c++){
                for(let d = 1; d < 10; d++){

                    if(n % a === 0 && n % b === 0 && n % c === 0 && n % d === 0){
                        specialNumbersString += "" + a + b + c + d + " ";
                    }
                 }
            }
        }
    }
    console.log(specialNumbersString);
}
specialNumbers([3])