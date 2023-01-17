function circleAreaAndPerimeter(input){

    let r = Number(input[0]);

    let area = ((r * r) * Math.PI).toFixed(2);
    let perimeter = (2 * Math.PI * r).toFixed(2);

    console.log(area);
    console.log(perimeter);
}
circleAreaAndPerimeter(["3"])