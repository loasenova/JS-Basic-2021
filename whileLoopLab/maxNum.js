function maxNum(input){

    let element = input[0];
    let index = 1;
    let max = Number.MIN_SAFE_INTEGER;

    while(element !== "Stop"){
        let num = Number(element); 
        if(num > max){

            max = num;
            
        }
        
        element = input[index];
        index++;
    }   
    console.log(max);
}
maxNum(["100",
"99",
"80",
"70",
"Stop"])