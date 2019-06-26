(function unity() {
    class Rat {
        constructor(name) {
            this.name = name;
            this.unitedList = [];
        }

        unite(rat) {
            if (rat instanceof Rat) {
                this.unitedList.push(rat);
            }
        }
        getRats() {
            return this.unitedList;
        }
        toString() {
            let name = `${this.name}\n`
            for (const rat of this.unitedList) {
                name += `##${rat.name}\n`;
            }
            return name;
        }
    }

    let firstRat = new Rat("Peter");
    console.log(firstRat.toString()); // Peter

    console.log(firstRat.getRats()); // []

    firstRat.unite(new Rat("George"));
    firstRat.unite(new Rat("Alex"));
    console.log(firstRat.getRats());
    // [ Rat { name: 'George', unitedRats: [] },
    //  Rat { name: 'Alex', unitedRats: [] } ]

    console.log(firstRat.toString());
    // Peter
    // ##George
    // ##Alex

})()