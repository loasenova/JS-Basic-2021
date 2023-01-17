function coins(input){

    let totalSum = Number(input[0]);
    totalSum = Math.floor(totalSum * 100);
    let count = 0;

    while(totalSum > 0){
        if(totalSum >= 200){
            count++;
            totalSum -= 200;
        }else if(totalSum >= 100){
            count++;
            totalSum -= 100;
        }else if(totalSum >= 50){
            count++;
            totalSum -= 50;
        }else if(totalSum >= 20){
            count++;
            totalSum -= 20;
        }else if(totalSum >= 10){
            count++;
            totalSum -= 10;
        }else if(totalSum >= 5){
            count++;
            totalSum -= 5;
        }else if(totalSum >= 2){
            count++;
            totalSum -= 2;
        }else if(totalSum >= 1){
            count++;
            totalSum -= 1;
        }

    }
    console.log(count);
}
coins(["2.73"])