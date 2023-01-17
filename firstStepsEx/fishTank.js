function fishTank(input){

    let length = Number(input[0]);
    let weidth = Number(input[1]);
    let height = Number(input[2]);
    let precentageReserve = Number(input[3]);

    let tankVolume = length * weidth * height;
    let tankVolumeinDM = tankVolume * 0.001;
    let total = tankVolumeinDM - (tankVolumeinDM * (precentageReserve / 100));

    console.log(total);
}
fishTank(["85","75","47","17"])