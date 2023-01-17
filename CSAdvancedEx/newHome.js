function newHome(input){

    let flower = input[0];
    let quantity = Number(input[1]);
    let budget = Number(input[2]);
    let price = 0;

    switch(flower){

        case "Roses":
            price = quantity * 5.00;
            if (quantity > 80){
                price = price * 0.90;
            }
            break;
        case "Dahlias":
            price = quantity * 3.80;
            if (quantity > 90){
                price = price * 0.85;
            }
            ;break;
        case "Tulips":
            price = quantity * 2.80;
            if (quantity > 80){
                price = price * 0.85;
            }
            ;break;
        case "Narcissus":
            price = quantity * 3.00;
            if (quantity < 120){
                price = price * 1.15;
            }
            ;break;
        case "Gladiolus":
            price = quantity * 2.50;
            if (quantity < 80){
                price = price * 1.20;
            }
            ;break;

    }

    let deff = Math.abs(price - budget);
    if(budget >= price){

        console.log(`Hey, you have a great garden with ${quantity} ${flower} and ${deff.toFixed
        (2)} leva left.`);
    }else{
        console.log(`Not enough money, you need ${deff.toFixed(2)} leva more.`)

    }

}
newHome(["Roses","55","250"])