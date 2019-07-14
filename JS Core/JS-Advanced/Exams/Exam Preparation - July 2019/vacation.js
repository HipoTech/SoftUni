class Vacation {
    constructor(organizer, destination, budget) {
        this.organizer = organizer;
        this.destination = destination;
        this.budget = budget;
        this.kids = {};
    }
    registerChild(name, grade, budgetOf) {

        if (this.kids.hasOwnProperty(grade)) {
            let isInTgeGrade = false;
            if (budgetOf < this.budget) {
                return `${name}'s money is not enough to go on vacation to ${this.destination}.`;
            }

            this.kids[grade].forEach(kid => {
                if (kid[0] === name) {
                    isInTgeGrade = true;
                }
            });

            if (isInTgeGrade) {
                return `${name} is already in the list for this ${this.destination} vacation.`;
            } else {
                this.kids[grade].push([name, budgetOf]);
                return this.kids[grade].map(kid => kid.join('-'));
            }
        } else {
            if (budgetOf < this.budget) {
                return `${name}'s money is not enough to go on vacation to ${this.destination}.`;
            }
            this.kids[grade] = [];
            this.kids[grade].push([name, budgetOf]);
            return this.kids[grade].map(kid => kid.join('-'));
        }

    };

    removeChild(name, grade) {
        let isFind = false;
        if (this.kids.hasOwnProperty(grade)) {

            for (const kid of this.kids[grade]) {
                const index = this.kids[grade].indexOf(kid)

                if (kid[0] === name) {
                    isFind = true;
                    this.kids[grade].splice(index, 1);
                    return this.kids[grade].map(kid => kid.join('-'));
                }
            }
        }
        if (!isFind) {
            return `We couldn't find ${name} in ${grade} grade.`
        }
    }

    toString() {
        if (this.numberOfChildren === 0) {
            return `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`
        } else {
            Object.entries(this.kids).sort((a, b) => a[0] - b[0])
                .forEach(grade => {
                    this.kids[grade[0]] = grade[1];
                });

            let strinToReturn = ''
            strinToReturn += `${this.organizer} will take ${this.numberOfChildren} children on trip to ${this.destination}\n`;

            for (const grade in this.kids) {
                if (this.kids[grade].length !== 0) {                  
                    let number = 1;

                    strinToReturn += `Grade: ${grade}\n`;
                    this.kids[grade].forEach(kid => {

                        let str = `${number}. ${kid.join('-')}\n`;
                        strinToReturn += str;
                        number++;
                    });
                }
            }
            return strinToReturn
        }
    }

    get numberOfChildren() {
        this._numberOfChildren = 0;
        for (const grade in this.kids) {
            this._numberOfChildren += this.kids[grade].length;
        }
        return this._numberOfChildren;
    }
}
let vacation = new Vacation('Miss Elizabeth', 'Dubai', 2000);
let vacation2 = new Vacation('Miss SDDFDSFSDF', 'Dubai', 2000);

vacation.registerChild('Mitko', 10, 5500)
vacation.registerChild('Gosho', 5, 3000);
vacation.registerChild('Lilly', 6, 1500);
vacation.registerChild('Pesho', 7, 4000);
vacation.registerChild('Pesho', 8, 4000);
vacation.removeChild('Pesho', 8);
vacation.registerChild('Tanya', 5, 5000);
console.log(vacation.toString());
console.log(vacation2.toString());