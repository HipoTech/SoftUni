function two(inputArea) {
    let items = inputArea[0].split("|").map(x => x.split("->"));
    let budget = +inputArea[1];

    let clothesPrice = 50;
    let shoesPrice = 35;
    let accessoriesPrice = 20.5;
    items.forEach(item => {
        item[1] = Number(item[1]);
    });
    let firstBudget = budget;

    items.forEach(item => {
        if (item[0] === "Accessories") {
            if (+item[1] <= accessoriesPrice && budget - Number(item[1]) >= 0) {
                budget -= +item[1];
                item[1] += (+item[1] * 0.4);
            } else {
                item[1] = -1;
            }
        }
        if (item[0] === "Clothes") {
            if (+item[1] <= clothesPrice && budget - Number(item[1]) >= 0) {
                budget -= +item[1];
                item[1] += (+item[1] * 0.4);
            } else {
                item[1] = -1;
            }
        }
        if (item[0] === "Shoes") {
            if (+item[1] <= shoesPrice && budget - Number(item[1]) >= 0) {
                budget -= +item[1];
                item[1] += (+item[1] * 0.4);
            } else {
                item[1] = -1;
            }
        }

    });


    let list = [];
    items.forEach(item => {
        list.push(item[1].toFixed(2));
    });
    let newList = list.filter(x => x > 0);
    

    let sum = 0;
    let listToPrint =""
    newList.forEach(element => {
        sum += +element;
        listToPrint += element + " ";
    });
    console.log(listToPrint);
    console.log(`Profit: ${(sum - firstBudget + budget).toFixed(2)}`);
    
    let total = sum + budget;
    if (total >= 150) {
        console.log(`Hello, France!`);
        
    }else{
        console.log(`Time to go.`);
        
    }




}
two(["Shoes->41.20|Clothes->20.30|Accessories->40|Shoes->15.60|Shoes->33.30|Clothes->48.60",
    "90"]);