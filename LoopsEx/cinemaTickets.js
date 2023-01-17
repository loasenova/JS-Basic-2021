function cinemaTickets(input){

    let index = 0;
    let command = input[index];
    index++;
    let studentCount = 0;
    let standartCount = 0;
    let kidCount = 0; 
    let totalTickets = 0;
    
    
    
    while(command !== "Finish"){
        let name = command;
        let freeSpace = Number(input[index]);
        index++;
        let ticket = input[index];
        index++;
        let ticketsCount = 0;
        
         while(ticket !== "End"){
            ticketsCount++;
            switch(ticket){
                case "student": studentCount++;break;
                case "standard": standartCount++;break;
                case "kid": kidCount++;break;
            }
            if(ticketsCount >= freeSpace){
                break;
            }
           
             ticket = input[index];
             index++;
         }
         totalTickets += ticketsCount;
         console.log(`${name} - ${(ticketsCount / freeSpace * 100).toFixed(2)}% full.`);
         

         command = input[index];
         index++; 
     }
     console.log(`Total tickets: ${totalTickets}`);
     console.log(`${(studentCount / totalTickets * 100).toFixed(2)}% student tickets.`);
     console.log(`${(standartCount / totalTickets * 100).toFixed(2)}% standard tickets.`);
     console.log(`${(kidCount / totalTickets * 100).toFixed(2)}% kids tickets.`);
     
}
cinemaTickets(["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"])