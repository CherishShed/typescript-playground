export class Payment {
    constructor(receipient, details, amount) {
        this.receipient = receipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `This ${this.receipient} collected $${this.amount} from ${this.details}`;
    }
}
