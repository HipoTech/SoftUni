function tickets(input, sortCreteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination
            this.price = Number(price)
            this.status = status
        }
    }

    let list = []

    input.forEach(dataCell => {
        let ticketForList = new Ticket(...dataCell.split('|'));
        list.push(ticketForList);
    });

    list.sort((a, b) => a[sortCreteria] > b[sortCreteria]);  //(a, b) => a['destination'].localeCompare(b['destination'])

    return list;
}
tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'price')