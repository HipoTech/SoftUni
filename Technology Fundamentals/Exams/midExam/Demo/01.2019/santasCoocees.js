function solve(inpurArr) {

    let batchesAmount = +inpurArr.shift();
    let totalBoxes = 0;

    let itemsObj = {
        'cookieGrams': 25,
        'cup': 140,
        'smallSpoon': 10,
        'bigSpoon': 20,
        'cookiesPerBox': 5
    };

    for (let i = 0; i < batchesAmount * 3; i += 3) {

        let flour = +inpurArr[i];
        let sugar = +inpurArr[i + 1];
        let cocoa = +inpurArr[i + 2];

        let flourCups = Math.trunc(flour / itemsObj['cup']);
        let sugarSpoons = Math.trunc(sugar / itemsObj['bigSpoon']);
        let cocoaSpoons = Math.trunc(cocoa / itemsObj['smallSpoon']);

        if (flourCups <= 0 || sugarSpoons <= 0 || cocoaSpoons <= 0) {
            console.log('Ingredients are not enough for a box of cookies.');

        } else {
            let bake = (itemsObj['cup'] + itemsObj['bigSpoon'] + itemsObj['smallSpoon'])
                * Math.min(flourCups, sugarSpoons, cocoaSpoons) / itemsObj['cookieGrams'];
                
            let currentBoxes = Math.trunc(bake / itemsObj['cookiesPerBox']);
            totalBoxes += currentBoxes;
            console.log(`Boxes of cookies: ${currentBoxes}`);
        }
    }

    console.log(`Total boxes: ${totalBoxes}`);
}