function celsiusToFahrenheit(input){

    let c = Number(input[0]);

    console.log((c * 1.8 + 32).toFixed(2));
}
celsiusToFahrenheit(["-5.5"])