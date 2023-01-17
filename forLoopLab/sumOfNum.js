function sumOfNum(input){

    let sum = 0;
    let text = input[0];
    let n = text.length;

    for(let i = 0; i < n; i++){
        sum += Number(text[i]);
    }
    console.log(`The sum of the digits is:${sum}`);
}
sumOfNum(["564891"])