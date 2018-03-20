class PaymentProcessor {
    constructor(obj) {
        this.obj = obj
        this.id = []
        this.sum = 0
        this.payments=[]
    }

    registerPayment(id, name, type, value) {
        if (id.length === 0 || name.length === 0) {
            throw new TypeError('Length zero')
        }
        if (isNaN(value)) {
            throw new TypeError('Not a number')
        }

        if (!this.obj) {
            this.obj={
                types: ["service", "product", "other"],
                precision: 2

            }
            if (!this.obj.types.includes(type)) {
                throw new TypeError('type not included')
            }
        }
        else {
            if(!this.obj.types){
             this.obj.types=["service", "product", "other"]
            }
            if(!this.obj.precision){
             this.obj.precision=2
            }
            if (!this.obj.types.includes(type)) {
                throw new TypeError('type not included')
            }
        }

        if (this.id.includes(id)) {

            throw new TypeError('id exists')
        }
        this.id.push(id)
        this.name = name
        this.type = type
        // if (this.obj) {
            this.value = Number(value).toFixed(this.obj.precision)
            this.sum+=Number(this.value)

        this.payments.push({
            id: id,
            name: this.name,
            type: this.type,
            value: Number(this.value)
        })
    }

    deletePayment(id) {
        if (this.id.includes(id)) {
            let index = this.id.indexOf(id)
            this.id.splice(index, 1)
        }
        else {
            throw new Error('id do not exists')
        }
    }

    get(id) {
        if (this.id.includes(id)) {
            // console.log('da');
            let payment
            this.payments.forEach(p=>{
                if(p.id==id){
                    payment=p
                }
            })
            let res = ''
            res += `Details about payment ID: ${id}\n`
            res += `- Name: ${payment.name}\n`
            res += `- Type: ${payment.type}\n`
            res += `- Value: ${payment.value}\n`
            return res
        }
        else {
            throw new Error('id do not exists')
        }
    }

    setOptions(options) {
        this.obj = options
        // console.log(this.obj);
    }

    toString() {
        let sum=0

        let res = ''
        res += `Summary:\n`
        res += `- Payments: ${this.id.length}\n`
        res += `- Balance: ${this.sum}\n`
        return res
    }
}

let precisePayments = new PaymentProcessor({precision: 5});
// generalPayments.registerPayment('', 'Microchips', 'product', 15000);
// generalPayments.registerPayment('0001', '', 'product', 15000);
precisePayments.registerPayment('0053', 'Interest', 'other', 0.00153);