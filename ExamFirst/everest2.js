function everest2(input){
    let index=0;

    let command = input[index]


     let m = 5364
     let days = 1;

     while(command !== "END"){
         let isResting = input[index];
         index++
         let currentM = Number(input[index]);         

         if(isResting === "Yes"){
             m+=currentM
             days++;
           } else{
             m+=currentM;
         }
         if(days > 5 ){
             console.log("Failed");
             console.log(m)
             break;
         }
         if(days<=5 && m >= 8848){
           console.log(`Goal reached for ${days} days!`);
           break;
       }

         command = input[index];
         index++
     }

}
everest2(["Yes",
"1000",
"Yes",
"945",
"No",
"1200",
"END"])