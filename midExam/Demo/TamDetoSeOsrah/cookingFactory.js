function cookingFactory(inputArea) {

    Array.prototype.sum = function () {
        let sumOfElements = 0;
        this.forEach(element => {
            sumOfElements += Number(element);
        });
        return sumOfElements;
    }

    Array.prototype.average = function () {
        let sumOfElements = 0;
        let len = this.length;
        this.forEach(element => {
            sumOfElements += Number(element);
        });
        return sumOfElements / len;
    }

    let workArea = inputArea.map(x => x.split("#"));
    workArea.pop();
    for (let element of workArea) {
        for (let subelement of element) {
            element[element.indexOf(subelement)] = Number(subelement);
        }
    }
    let ansuer = workArea
        .sort((a, b) => {
            if (a.sum() === b.sum()) {
                if (a.average() < b.average()) {
                    return 1;
                } else if (a.average() > b.average()) {
                    return -1;
                } else {
                    if (a.length < b.length) {
                        return -1;
                    } else if (a.length > b.length) {
                        return 1;
                    } else {
                        return 0;
                    }
                }
            } else if (a.sum() < b.sum()) {
                return 1;
            } else if (a.sum() > b.sum()) {
                return -1;
            }
        }
        );

    console.log(`Best Batch quality: ${ansuer[0].sum()}`);
    console.log(ansuer[0].join(" "));
}
cookingFactory(["10#2#-2#1#-1",
    "5#3#2",
    "",
    "4#2#1",
    "Bake It!"])