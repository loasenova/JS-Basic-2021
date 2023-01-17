function areaOfFigures(input){

    let figure = input[0];

    if(figure === "square"){
        let a = Number(input[1]);
        let area = a * a;
        console.log(area.toFixed(3));
    }
    if(figure === "rectangle"){
        let a = Number(input[1]);
        let b = Number(input[2]);
        let area = a * b;
        console.log(area.toFixed(3));
    }
    if(figure === "circle"){
        let r = Number(input[1]);
        let area = r * r * Math.PI;
        console.log(area.toFixed(3));
    }
    if(figure === "triangle"){
        let a = Number(input[1]);
        let ah = Number(input[2]);
        let area = (a * ah) / 2;
        console.log(area.toFixed(3));

    }
}
areaOfFigures(["triangle","4.5","20"])