function argumentsInfo() {
    let list = {};
    for (const argument of arguments) {
        let argumentType = typeof argument;
        if (list.hasOwnProperty(argumentType)) {
            list[argumentType] += 1;
        } else {
            list[argumentType] = 1;
        }
        console.log(`${argumentType}: ${argument}`);
    }
    Object.entries(list)
        .sort((a, b) => b[1] - a[1])
        .forEach(element => {
            console.log(`${element[0]} = ${element[1]}`);
        });
}
argumentsInfo(42, 'cat', 15, 'kitten', 'tomcat')