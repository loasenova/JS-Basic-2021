function suppliesForSchool(input){

    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let litersOfDetergent = Number(input[2]);
    let discount = Number(input[3]);

    let pensPrice = pens * 5.80;
    let markersPrice = markers * 7.20;
    let litersOfDetergentPrice = litersOfDetergent * 1.20;
    let total = pensPrice + markersPrice + litersOfDetergentPrice;

    let totalCost = total - (total * (discount / 100));

    console.log(totalCost);
}
suppliesForSchool(["2","3","4","25"])