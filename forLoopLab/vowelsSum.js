function vowelsSum(input){

    let text = input[0];
    let n = text.length;
    let sum = 0;

    for(let i = 0; i < n; i++){
        switch(text[i]){
            case "a": sum += 1; break;
            case "e": sum += 2; break;
            case "i": sum += 3; break;
            case "o": sum += 4; break;
            case "u": sum += 5; break;     
        }
    }
        console.log(sum);
    
}
vowelsSum(["hello"])