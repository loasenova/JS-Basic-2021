function vacationBooksList(input){

    let bookPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2]);

    let hours = (bookPages / pagesPerHour) / days;

    console.log(hours);
}
vacationBooksList(["212", "20", "2"])