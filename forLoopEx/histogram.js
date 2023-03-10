function histogram(input){

    let n = Number(input[0]);

    let p1Counter = 0;
    let p2Counter = 0;
    let p3Counter = 0;
    let p4Counter = 0;
    let p5Counter = 0;

    for(let i = 1; i <= n; i++){
        let x = Number(input[i]);
        if(x < 200){
            p1Counter++;
        }else if(x >= 200 && x < 400){
            p2Counter++;
        }else if(x >= 400 && x < 600){
            p3Counter++;
        }else if(x >= 600 && x < 800){
            p4Counter++;
        }else{
            p5Counter++;
        }
    }
    p1 = p1Counter / n * 100;
    p2 = p2Counter / n * 100;
    p3 = p3Counter / n * 100;
    p4 = p4Counter / n * 100;
    p5 = p5Counter / n * 100;

    console.log(p1.toFixed(2) + "%");
    console.log(p2.toFixed(2) + "%");
    console.log(p3.toFixed(2) + "%");
    console.log(p4.toFixed(2) + "%");
    console.log(p5.toFixed(2) + "%");

}
histogram(["7",
"800",
"801",
"250",
"199",
"399",
"599",
"799"])
