function pincode2(input){

    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let thirdNumber = Number(input[2]);
 
    for(let i = 1; i <= firstNumber; i++){
      if(i % 2 === 0){
        continue;
      }
 
      for(let j = 1; j <= secondNumber; j++){
          if(j < 2 || j > 7) continue; 
          if(j !== 2 && j !== 3 && j !== 5 && j !== 7) continue;
 
          for(let k = 1; k <= thirdNumber; k++){
              if(k % 2 !==0) continue;
 
              console.log(`${i} ${j} ${k}`);
          }
      }
    }
  }
    
}
pincode2([3,5,5])