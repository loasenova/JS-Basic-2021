function pipesInPool(input){

    let v = Number(input[0]);
    let p1 = Number(input[1]);
    let p2 = Number(input[2]);
    let h = Number(input[3]);

    let p1Debit = p1 * h;
    let p2Debit = p2 * h;
    let totalDebit = p1Debit + p2Debit;

    if(totalDebit > v){

        let deff = (totalDebit - v).toFixed(2);
        console.log(`For ${h} hours the pool overflows with ${deff} liters.`)

    }else{

        let poolPer = ((totalDebit * 100) / v).toFixed(2);
        let p1Per = ((p1Debit * 100) / totalDebit).toFixed(2);
        let p2Per = ((p2Debit * 100) / totalDebit).toFixed(2);

        console.log(`The pool is ${poolPer}% full. Pipe 1: ${p1Per}%. Pipe 2: ${p2Per}%`)
    }
    
}
pipesInPool(["100",
"100",
"100",
"2.5"])