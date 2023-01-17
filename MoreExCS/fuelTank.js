function fuelTank(input){

    let fuel = input[0];
    let liters = Number(input[1]);

    if(liters >= 25){
        switch(fuel){
            case "Diesel":
                console.log("You have enough diesel.");break;
            case "Gasoline":
                console.log("You have enough gasoline.");break;
            case "Gas":
                console.log("You have enough gas.");break;
                default: 
                    console.log("Invalid fuel!");break;
        }
    }else if(liters < 25){
        switch(fuel){
            case "Diesel":
                console.log("Fill your tank with diesel!");break;
            case "Gasoline":
                console.log("Fill your tank with gasoline!");break;
            case "Gas":
                console.log("Fill your tank with gas!");break;
                default: 
                    console.log("Invalid fuel!");break;
        }
    }
}
fuelTank(["Kerosene",200])