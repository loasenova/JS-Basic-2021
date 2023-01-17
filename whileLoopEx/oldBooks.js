function oldBooks(input){

    let index = 0;
    let favBook = input[index];
    index++;
    let nextBook = input[index];
    index++;
    let count = 0;
    let bookIsFound = false;

    while(nextBook !== "No More Books"){
        count++;
        if(nextBook === favBook){
            console.log(`You checked ${count-1} books and found it.`);
            bookIsFound = true;
            break;
        }
       
        nextBook = input[index];
        index++;

    }
    if(!bookIsFound){
    console.log("The book you search is not here!");
    console.log(`You checked ${count} books.`);
    }
}
oldBooks(["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"])
