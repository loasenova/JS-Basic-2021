function cake(input){

    let index = 0;
    let w = Number(input[index]);
    index++;
    let l = Number(input[index]);
    index++;
    let total = w * l;
    let command = input[index];
    index++;
    let isHavePieces = true;

    while(command !== "STOP"){
        let pieces = Number(command);
        total -= pieces;

        if(total <= 0){
            isHavePieces = false;
            console.log(`No more cake left! You need ${Math.abs(total)} pieces more.`)
            break;
        }

        command = input[index];
        index++;
    }
    if(isHavePieces){
        console.log(`${total} pieces are left.`);
    }
    
}
cake(["10",
"10",
"20",
"20",
"20",
"20",
"21"])