function everest(input){

    
    let startM = 5364;
    let count = 1;
    let isReached = false;

    for(let index = 0; index < input.length; index++){
        let type = input[index];
        index++;
        

        if(type === "Yes"){
            count++;
        }

        if(type === "END"){
            break;
        }

        if(count > 5){
            break;
        }

        let currM = Number(input[index]);
        startM += currM;

        if(startM >= 8848){
            isReached = true;
            console.log(`Goal reached for ${count} days!`);
            break;
        }

       
    }

    if(!isReached){
        console.log(`Failed!`);
        console.log(`${startM}`);
    }
}

everest(["Yes",
"1000",
"Yes",
"945",
"No",
"1200",
"END"])

   