function COURSEpLANING(params) {
    let initionArray = params[0].split(", ")
    params.pop();
    params.shift();
    let commands = [];
    params.map(x => commands.push(x))
    commands = commands.map(x => x.split(":"))

    let command = "";

    commands.forEach(element => {
        command = element[0];
        if (command === "Add") {    //Add
            if (initionArray.some(x => x === `${element[1]}`)) {

            } else {
                initionArray.push(element[1])
            }
        }

        if (command === "Insert") {
            let index = Number(element[2]);
            if (initionArray.some(x => x === `${element[1]}`)) {

            } else if (index >= 0) {
                initionArray.splice(index, 0, element[1]);
            }
        }

        if (command === "Remove") {
            if (initionArray.some(x => x === `${element[1]}-Exercise`)) {
                let index = initionArray.indexOf(`${element[1]}-Exercise`);
                initionArray.splice(index, 1)
            }
            if (initionArray.some(x => x === `${element[1]}`)) {
                let index = initionArray.indexOf(element[1]);
                initionArray.splice(index, 1)
            }
        }

        if (command === "Exercise") {
            if (initionArray.some(x => x === `${element[1]}`)) {
                let index = initionArray.indexOf(element[1]) + 1;
                initionArray.splice(index, 0, element[1] + "-Exercise")
            } else {
                initionArray.push(element[1])
                initionArray.push(element[1] + "-Exercise")
            }
        }

        if (command === "Swap") {
            if (initionArray.some(x => x === `${element[1]}`) && initionArray.some(x => x === `${element[2]}`)) {
                let indexFirstElement = initionArray.indexOf(element[1]);
                let indexSecondElement = initionArray.indexOf(element[2]);
                let buffer = initionArray[indexFirstElement];
                initionArray.splice(indexFirstElement, 1, initionArray[indexSecondElement]);
                initionArray.splice(indexSecondElement, 1, buffer);
                if (initionArray.some(x => x === `${element[1]}-Exercise`)) {
                    let index = initionArray.indexOf(`${element[1]}`);
                    let indexOfOld = initionArray.indexOf(`${element[1]}-Exercise`);
                    initionArray.splice(index + 1, 0, `${element[1]}-Exercise`);
                    initionArray.splice(indexOfOld, 1);
                }
                if (initionArray.some(x => x === `${element[2]}-Exercise`)) {
                    let index = initionArray.indexOf(`${element[2]}`);
                    let indexOfOld = initionArray.indexOf(`${element[2]}-Exercise`);
                    initionArray.splice(index + 1, 0, `${element[2]}-Exercise`);
                    initionArray.splice(indexOfOld+1, 1);
                }
            }
        }

    });
    initionArray.forEach(element => {
        let index = initionArray.indexOf(element);
        console.log(`${index + 1}.${element}`);

    });
}
COURSEpLANING(["Data Types, Objects, Lists",
    "Add:Databases",
    "Insert:Arrays:0",
    "Remove:Lists",
    "course start"
])