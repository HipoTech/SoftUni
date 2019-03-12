function three(inputArea) {
    let mainArray = inputArea[0].split(" ").map(Number);
    let i = 1;
    let command = [];
    while (inputArea[i] !== "END") {
        command.push(inputArea[i].split(" "));
        i++;
    }

    for (let i = 0; i < command.length; i++) {
        for (let j = 0; j < command[i].length; j++) {
            if (j > 0) {
                command[i][j] = Number(command[i][j]);
            }
        }
    }

    command.forEach(com => {
        if (com[0] === "Change") {
            let index = mainArray.indexOf(com[1]);
            mainArray[index] = com[2];
        }
        if (com[0] === "Hide") {
            let index = mainArray.indexOf(com[1]);
            mainArray.splice(index, 1)
        }
        if (com[0] === "Switch") {
            let index1 = mainArray.indexOf(com[1]);
            let index2 = mainArray.indexOf(com[2]);
            if (index1 >= 0 && index2 >= 0) {
                mainArray.splice(index1, 1, com[2])
                mainArray.splice(index2, 1, com[1])
            }
        }
        if (com[0] === "Insert") {
            if (com[1] < mainArray.length && com[1] >= 0) {
                mainArray.splice(com[1] + 1, 0, com[2])
            }
        }
        if (com[0] === "Reverse") {
            mainArray.reverse();
        }
    });


    console.log(mainArray.join(" "));

}
three(['115 115 101 114 73 111 116 75',
    'Insert 5 114',
    'Switch 116 73',
    'Hide 75',
    'Reverse ',
    'Change 73 70',
    'Insert 10 85',
    'END']);