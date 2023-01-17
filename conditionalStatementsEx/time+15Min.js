function timePlus15Min(input){

    let hour = Number(input[0]);
    let min = Number(input[1]);

    let timeInMin = hour * 60 + min;

    timeInMin = timeInMin + 15;

    let h = Math.floor(timeInMin / 60);
    let m = timeInMin % 60;

    if(h >= 24){
        h = 0;
    }

    if(m < 10){
        console.log(`${h}:0${m}`)
    }
    else{
        console.log(`${h}:${m}`)
    }
}
timePlus15Min(["1","46"])