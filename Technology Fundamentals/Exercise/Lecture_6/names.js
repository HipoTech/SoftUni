function names(inputArray) {
    inputArray.sort((a, b) => {
        if (a.length === b.length) {
            return a.localeCompare(b);
        } else {
            return a.length - b.length;
        }
    })
    for (let i = 0; i < inputArray.length; i++) {
        for (let j = i + 1; j < inputArray.length; j++) {
            if (inputArray[i] === inputArray[j]) {
                inputArray.splice(i,1);
            }
        }
    }
    inputArray.forEach(element => {
        console.log(element);
        
    });

}
names(["Denise",
    "Rotc1",
    "Rotb2",
    "Ignatius",
    "Iris",
    "Isacc",
    "Indie",
    "Dean",
    "Donatello",
    "Enfuego",
    "Benjamin",
    "Biser",
    "Bounty",
    "Renard",
    "Rot"])