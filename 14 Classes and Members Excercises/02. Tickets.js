function sortTickets(tickets, criteria) {

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination
            this.price = price
            this.status = status
        }
    }

    let arr = []
    for (let i = 0; i < tickets.length; i++) {
        let tokens = tickets[i].split("|")
        let ticket = new Ticket(tokens[0], Number(tokens[1]), tokens[2])
        // console.log(ticket[criteria]);
        arr.push(ticket)
    }
  return  arr.sort((a, b) => a[criteria]>b[criteria])
}

console.log(sortTickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'));
