function sortAnArrayBy2Criteria(params) {
    params.sort((a, b) => {
        if (a.length > b.length) {
            return 1;
        } else if (a.length < b.length) {
            return -1;
        } else {
            return a.localeCompare(b);
        }
    })
    params.forEach(element => {
        console.log(element);
    });
}
sortAnArrayBy2Criteria(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George'
])