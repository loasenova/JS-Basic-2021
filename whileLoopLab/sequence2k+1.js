function sequence2k(input){

    let n = Number(input[0]);
    let count = 1;

    while(count <= n){

        console.log(count);
        count = count * 2 + 1; 
    }

}
sequence2k(["31"])