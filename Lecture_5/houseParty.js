function houseParty(inputArray){
    function removeFromList(name, arrayOfNames) {
        if (arrayOfNames.indexOf(name) !== -1) {
            console.log(`${name} is already in the list!`)
        }else {
            arrayOfNames.push(name);
        }
    }

    function addToList(name, arrayOfNames) {
        if (arrayOfNames.indexOf(name) === -1) {
            console.log(`${name} is not in the list!`)
        }else {
            let index = arrayOfNames.indexOf(name);
            arrayOfNames.splice(index, 1);
        }
    }

    function arrayList(inputArray) {
        let arrayOfNames = [];
        for (let i = 0; i < inputArray.length; i++) {
            let comandsArray = inputArray[i].split(' ');
            let name = comandsArray[0];
            let command = comandsArray
                .slice(1)
                .join(' ');
            switch (command) {
                case 'is going!':
                    removeFromList(name,arrayOfNames)
                    break;
                case 'is not going!':
                    addToList(name,arrayOfNames)
                    break;
            }
        }
        return arrayOfNames;
    }

    function printList(list) {
        for (let element of list) {
            console.log(element);
        }
    }

    let list = arrayList(inputArray);
    printList(list);


}
houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']

);