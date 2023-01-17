function building(input){

    let floor = Number(input[0]);
    let rooms = Number(input[1]);
    

    for(let i = floor; i>0; i--){
        let l = "";
        for(let j = 0; j<rooms; j++){
            if(i === floor){
                l += "L" + i + j + " ";  
            }else if(i % 2 !== 0){
                l += "A" + i + j + " ";
            }else if(i % 2 === 0){
                l += "O" + i + j + " ";
            }
            
        }
        console.log(l); 
    }
    
}
building(["6", "4"])