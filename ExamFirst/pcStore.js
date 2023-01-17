function pcStore(input){

    
    let processor = Number(input[0]);
    let videoCard = Number(input[1]);
    let ramMemory = Number(input[2]);
    let ramCounter = Number(input[3]);
    let discount = Number(input[4]);
   

    let processorLv = processor * 1.57;
    let videoCardLv = videoCard * 1.57;
    let ramMemoryLv = ramMemory * 1.57;
    let ramTotal = ramMemoryLv * ramCounter;
   

    let processorDiss = processorLv - (processorLv * discount);
    let videoCardDiss = videoCardLv - (videoCardLv * discount);
   

    let total = processorDiss + videoCardDiss + ramTotal;

    console.log(`Money needed - ${total.toFixed(2)} leva.`);

}
pcStore(["500",
"200",
"80",
"2",
"0.05"])