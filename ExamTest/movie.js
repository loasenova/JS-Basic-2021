function movie(input){

    let movie = input[0];
    let days = Number(input[1]);
    let tickets = Number(input[2]);
    let ticketPrice = Number(input[3]);
    let percent = Number(input[4]);

    let profitPerDay = tickets * ticketPrice;
    let profit = profitPerDay * days;
    let profitForCinema = profit * (percent / 100);
    let finalProfit = profit - profitForCinema;

    console.log(`The profit from the movie ${movie} is ${finalProfit.toFixed(2)} lv.`)

}
movie(["The Programmer", 20, 500, 7.50, 7])