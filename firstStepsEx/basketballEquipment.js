function basketballEquipment(input){

    let tax = Number(input[0]);
    let shoes = tax - (tax * 0.40);
    let equipment = shoes - (shoes * 0.20);
    let ball = equipment / 4;
    let accessories = ball / 5;
    let result = tax + shoes + equipment + ball + accessories;

    console.log(result)
}
basketballEquipment(["365"])