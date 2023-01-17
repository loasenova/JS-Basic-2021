function multiplyBy2(input){

    let index = 0;
    let num = Number(input[index]);
    index++;

    while(num >= 0){
        let total = num * 2;
        console.log(`Result: ${total.toFixed(2)}`);
    
        num = Number(input[index])
        index++;
    }
    console.log("Negative number!")
   
}
multiplyBy2([-123])