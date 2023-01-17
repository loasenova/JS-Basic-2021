function housePainting(input){

    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);

    let walls = (2 * (x * x) - (1.2 * 2)) + (2 * (x * y) - (2 * (1.5 *1.5)));
    let roof = (2 * (x * y) + (2 * ((x * h) / 2)));
    let green = walls / 3.4;
    let red = roof / 4.3;

    console.log(green.toFixed(2));
    console.log(red.toFixed(2));

}
housePainting(["10.25",
"15.45",
"8.88"])