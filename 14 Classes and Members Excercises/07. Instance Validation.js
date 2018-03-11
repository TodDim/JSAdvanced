class CheckingAccount {
    constructor(clientId, email, firstName, lastName) {
        if (/\b[0-9]{6}\b/.test(clientId) === false) {
            throw new TypeError("Client ID must be a 6-digit number")
        }
        this.clientId = clientId
        if (/\b\w+@[a-zA-Z.]+\b/.test(email) === false) {
            throw new TypeError("Invalid e-mail")
        }
        this.email = email
        if (/\b[a-zA-Z.]+\b/.test(firstName) === true&&/[a-zA-Z.]{3,20}/.test(firstName) === false) {
            throw new TypeError(`First name must be between 3 and 20 characters long`)
        }
        else if (/\b[a-zA-Z.]+\b/.test(firstName) === false) {
            throw new TypeError(`First name must contain only Latin characters`)
        }
        this.firstName = firstName
        if (/\b[a-zA-Z.]+\b/.test(lastName) === true&&/[a-zA-Z.]{3,20}/.test(lastName) === false) {
            throw new TypeError(`Last name must be between 3 and 20 characters long`)
        }
        else if (/\b[a-zA-Z.]+\b/.test(lastName) === false) {
            throw new TypeError(`Last name must contain only Latin characters`)
        }
        this.lastName = lastName
        this.products = []
    }

}
// let acc = new CheckingAccount('1314', 'ivan@some.com', 'Ivan', 'Petrov')

// let acc = new CheckingAccount('131455', 'ivan@', 'Ivan', 'Petrov')
// let acc = new CheckingAccount('131455', 'ivan@some.com', 'I', 'Petrov')

let acc = new CheckingAccount('131455', 'ivan@some.com', 'Ivan', 'P3trov')
