function partiTime(input) {
    let indexOfParty = input.indexOf('PARTY');
    let listOfGuests = input.slice(0, indexOfParty);

    for (let i = indexOfParty + 1; i < input.length; i++) {
        let guest = input[i];
        let guestIndex = listOfGuests.indexOf(guest);
        listOfGuests.splice(guestIndex, 1);
    }

    let result = listOfGuests.filter(g => Number.isInteger(+g[0]))
        .concat(listOfGuests.filter(g => !Number.isInteger(+g[0])));
    console.log(`${result.length}\n${result.join('\n')}`);
}
partiTime(['m8rfQBvl',
    'fc1oZCE0',
    'a8rfQBvl',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'fPXNHpm1',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
])