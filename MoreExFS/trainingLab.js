function trainingLab(input){

    let h = Number(input[0]);
    let w = Number(input[1]);

    let wInSm = w * 100;
    let hInSm = h * 100;

    let desks = Math.floor((wInSm - 100) / 70);

    let columns = Math.floor(hInSm / 120);

    let total = columns * desks - 3;

    console.log(total);
}
trainingLab(["8.4","5.2"])