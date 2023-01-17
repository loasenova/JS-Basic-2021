function equalSum(input){

    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let result = "";

    for(let i = startNum; i<=endNum; i++){
        let evenSum = 0;
        let oddSum = 0;
        let numToString = i + "";
        for(let j = 0; j < numToString.length; j++){
            if(j % 2 === 0){
                evenSum += Number(numToString[j]);
            }else{
                oddSum += Number(numToString[j]);
            }

        }
        if(evenSum === oddSum){
            result += numToString + " ";
            
        }
    }
    console.log(result);
    
}
equalSum(["100000", "100050"])