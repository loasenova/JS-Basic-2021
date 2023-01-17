function graduation(input){

    let name = input[0];
    let index = 1;
    let classes = 0;
    let sum = 0;
    let poor = 0;

    while(classes < 12){

        let rating = Number(input[index]);
        classes++;
       
        if(rating >= 4){

            sum += rating;

        }else{

            poor++;

            if(poor === 2){

                console.log(`${name} has been excluded at ${classes-1} grade`);
                break;
            }
        }

        if(classes === 12){

            let average = sum / 12;
            console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`);
            
        }

        rating = input[index];
        index++;
    }
}
graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])