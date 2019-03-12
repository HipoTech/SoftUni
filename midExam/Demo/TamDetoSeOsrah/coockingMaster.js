function coocingMaster(array){
    let budget = array[0];
    let students  = array[1] ;
    let priceOfFlour = array[2];
    let priceOfEgg = array[3];
    let priceOfApron = array[4];

    let total = 0;

    let totalApronPrice = priceOfApron*Math.ceil(students*1.2);
    let priseOfAllFlour = priceOfFlour*(students - Math.floor(students/5));
    let priseOfAllEgg = priceOfEgg*students*10;

    total = priseOfAllFlour+totalApronPrice+priseOfAllEgg;
    if (total <= budget){
        console.log(`Items purchased for ${total.toFixed(2)}$.`);
    }else{
        let notEnought = total-budget;
        console.log(`${notEnought.toFixed(2)}$ more needed.`);
        
    }

}
coocingMaster([100,
    25,
    4.0,
    1.0,
    6.0])