function Vacation(peopleCount, type, day) {
    let people = peopleCount;
    let typeOfPeople = type;
    let dayOfWeek = day;
    let price;
    let total;
    switch (typeOfPeople) {
        case 'Students':
            switch (dayOfWeek) {
                case 'Friday':
                    price = 8.45;
                    break;
                case 'Saturday':
                    price = 9.80;
                    break;
                case 'Sunday':
                    price = 10.46;
                    break;
                default:
                    price = 0;
                    break;
            }
            total = people * price;
            if (people >= 30) {
                total = total * 0.85;
            }
            break;
        case 'Business':
            switch (dayOfWeek) {
                case 'Friday':
                    price = 10.9;
                    break;
                case 'Saturday':
                    price = 15.6;
                    break;
                case 'Sunday':
                    price = 16;
                    break;
                default:
                    price = 0;
                    break;
            }
            total = people * price;
            if (people >= 100) {
                total = total - 10 * price;
            }
            break;
        case 'Regular':
            switch (dayOfWeek) {
                case 'Friday':
                    price = 15;
                    break;
                case 'Saturday':
                    price = 20;
                    break;
                case 'Sunday':
                    price = 22.50;
                    break;
                default:
                    price = 0;
                    break;
            }
            total = people * price;
            if (people >= 10 && people <= 20) {
                total = total * 0.95;
            }
            break;

        default:
            break;
    }
    let ansuer = `Total price: ${total.toFixed(2)}`;
    console.log(ansuer);
}
Vacation(30, "Students", "Sunday")