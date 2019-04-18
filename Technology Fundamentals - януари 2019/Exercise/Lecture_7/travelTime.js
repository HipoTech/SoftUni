function travileTime(params) {
    let townArray = params.map(x => x.split(" > "));

    removeDuplicate(townArray);

    townArray.sort((a, b) => {
        if (a[0].toLowerCase() > b[0].toLowerCase()) {
            return 1;
        } else if (a[0].toLowerCase() < b[0].toLowerCase()) {
            return -1;
        } else {
            if (Number(a[2]) - Number(b[2]) > 0) {
                return 1;
            } else if (Number(a[2]) - Number(b[2]) < 0) {
                return -1;
            } else {
                return 0;
            }
        }
    })

    function removeDuplicate(townArray) {
        for (let i = 0; i < townArray.length; i++) {
            for (let j = i + 1; j < townArray.length; j++) {
                if (townArray[i][1] === townArray[j][1] && townArray[i][0] === townArray[j][0]) {
                    townArray[i][2] = Math.min(townArray[i][2], townArray[j][2]);
                    townArray.splice(j, 1);
                    removeDuplicate(townArray);
                }
            }
        }
    }

    joinSameCountry(townArray);

    function joinSameCountry(townArray) {
        for (let i = 0; i < townArray.length; i++) {
            for (let j = i + 1; j < townArray.length; j++) {
                if (townArray[i][0] === townArray[j][0]) {
                    townArray[i].push(townArray[j][1]);
                    townArray[i].push(townArray[j][2]);
                    townArray.splice(j, 1);
                    joinSameCountry(townArray);
                }
            }
        }
    }

    townArray.forEach(row => {
        let stringToPrint = "";
        for (let i = 0; i < row.length; i++) {
            if (isNaN(row[i])) {
                stringToPrint += row[i] + " -> "
            } else {
                stringToPrint += row[i] + " ";
            }
        }
        console.log(stringToPrint);
    });

}
travileTime(["Bulgaria > Sofia > 25000",
    "aaa > Sofia > 1",
    "aa > Orgrimar > 0",
    "Albania > Tirana > 25000",
    "zz > Aarna > 25010",
    "Bulgaria > Lukovit > 10"]
)