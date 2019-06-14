(function (params) {
    let list = {};
    for (const argument of arguments) {
        let argumentValue = argument;
        let argumentType = typeof argument;
        if (list.hasOwnProperty(argumentType)) {
            list[argumentType] += 1;
        } else {
            list[argumentType] = 1;
        }
        if (argumentType === 'object') {
            console.log(`${argumentType}: `);
        } else {
            console.log(`${argumentType}: ${argumentValue}`);
        }
    }
    let listSorted = []
    for (const type in list) {
        listSorted.push([type, list[type]])

    }
    listSorted.sort((a, b) => a[1] - b[1]);
    listSorted.forEach(element => {
        console.log(`${element[0]} = ${element[1]}`);

    });


})(42, 'cat', 15, 'kitten', 'tomcat')