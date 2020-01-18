function problemSecond(params) {
    let i = 0;
    let nodes = [];
    let stors = {};

    while (params[i] !== 'END') {
        let [command, stor, items] = params[i].split('->')
        switch (command) {
            case 'Add':
                if (items.includes(',')) {
                    let itemsSeparated = items.split(',');
                    itemsSeparated.forEach(element => {
                        items = element;
                        if (stors.hasOwnProperty(stor)) {
                            stors[stor].push(items);
                        } else {
                            stors[stor] = []
                            stors[stor].push(items);
                        }
                    });

                } else {
                    if (stors.hasOwnProperty(stor)) {
                        stors[stor].push(items);
                    } else {
                        stors[stor] = []
                        stors[stor].push(items);
                    }
                }
                break;
            case 'Remove':
                delete stors[stor];
                break;

            default:
                break;
        }
        i++;
    }
    let areaOfStores = []
    for (const s in stors) {
        areaOfStores.push([[s,], stors[s]])
        areaOfStores.sort((a, b) => {
            if (a[1].length - b[1].length === 0) {
                return b[0][0].localeCompare(a[0][0])
                
            } else {
                return b[1].length - a[1].length
            }

        })

    }
    if (areaOfStores.length !== 0) {
        console.log('Stores list:');
    }
    areaOfStores.forEach(element => {
        console.log(element[0][0]);
        element[1].forEach(x => {
            console.log(`<<${x}>>`);
        });
        
        
    });
}
problemSecond(['Add->PeakSports->Map,Navigation,Compass',
    'Add->Paragon->Sunscreen',
    'Add->Groceries->Dried-fruit,Nuts',
    'Add->Groceries->Nuts',
    'Add->Paragon->Tent',
    'Remove->Paragon',
    'Add->Pharmacy->Pain-killers',
    'END'])

