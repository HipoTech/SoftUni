function sortByTwoCreteria(inputArea) {
    inputArea.sort(function (a, b) {
            if (a.length !== b.length) {
                return a.length - b.length;
            } else {
                return a>b;
            }
        });
    for (let element of inputArea) {
        console.log(element);
    }
}

sortByTwoCreteria(["Abcde",
    "Qwert",
    "b", "Abcdf"]);