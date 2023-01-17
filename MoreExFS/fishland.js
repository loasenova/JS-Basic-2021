function fishland(input){

    let mackerelPrice = Number(input[0]);
    let toyPrice = Number(input[1]);
    let bonitoKg = Number(input[2]);
    let scadKg = Number(input[3]);
    let musselsKg = Number(input[4]);

    let bonitoPrice = (mackerelPrice + mackerelPrice * 0.60);
    let scadPrice = (toyPrice + toyPrice * 0.80);
    let musselsPrice = (musselsKg * 7.50);

    let total = (bonitoPrice * bonitoKg + scadPrice * scadKg + musselsPrice)

    console.log(total.toFixed(2))
     
}
fishland(["5.55",
"3.57",
"4.3",
"3.6",
"7"])