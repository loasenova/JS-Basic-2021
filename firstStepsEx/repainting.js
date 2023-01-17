function repainting(input){

    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let hours = Number(input[3]);

    let nylonPrice = nylon * 1.50;
    let paintPrice = paint * 14.50
    let thinnerPrice = thinner * 5.00;

    let materials = nylonPrice + paintPrice + thinnerPrice + ((paint * 0.10) * 14.50) + (1.50 * 2) + 0.40;
    let workers = materials * 0.30;
    let totalCost = workers * hours + materials;

    console.log(totalCost);
}
repainting(["5","10","10","1"])