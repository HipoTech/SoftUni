class Vacation {
    constructor(organizer, destination, budget) {
        this.organizer = organizer;
        this.destination = destination;
        this.budget = budget;
        this.kids = {};
    }
    registerChild(name, grade, budget) {
        const kid = [name, budget, grade];
        if (this.kids.hasOwnProperty(kid[0])) {
            console.log(`${name} is already in the list for this ${this.destination} vacation.`);
            return `${name} is already in the list for this ${this.destination} vacation.`;
        } else {
            if (kid[1] < this.budget) {
                console.log(`${name}'s money is not enough to go on vacation to ${this.destination}.`);
                return `${name}'s money is not enough to go on vacation to ${this.destination}.`;
            } else {

            }
        }
    };

    removeChild() {

    }

}

let vacation = new Vacation('Mr Pesho', 'San diego', 2000);
// console.log(vacation.registerChild('Mitko', 10, 2590));
// console.log(vacation.registerChild('Ivan', 10, 2590));
vacation.registerChild('Mitko', 10, 2590);
vacation.registerChild('Ivan', 10, 2600);