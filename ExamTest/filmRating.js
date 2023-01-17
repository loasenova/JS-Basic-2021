function filmRating(input){

    let index = 0;
    let movies = Number(input[index]);
    index++;
    let max = Number.MIN_SAFE_INTEGER;
    let min = Number.MAX_SAFE_INTEGER;
    let totalRating = 0;
    let movieLowestRaring = "";
    let movieHighestRating = "";
    

    for(let i = 1; i <= movies; i++){
        let name = input[index];
        index++;
        let rating = Number(input[index]);
        index++;

        totalRating += rating;

        if(rating > max){
            max = rating; 
            movieHighestRating = name;  
        }

        if(rating < min){
            min = rating;
            movieLowestRaring = name;
        }
        
    } 

    console.log(`${movieHighestRating} is with highest rating: ${max.toFixed(1)}`);
    console.log(`${movieLowestRaring} is with lowest rating: ${min.toFixed(1)}`);

    let avgRating = totalRating / movies;
    console.log(`Avarage rating: ${avgRating.toFixed(1)}`);
}
filmRating([5,
    "A Star is Born",
    7.8,
    "Creed 2",
    7.3,
    "Mary Poppins",
    7.2,
    "Vice",
    7.2,
    "Captain Marvel",
    7.1])
