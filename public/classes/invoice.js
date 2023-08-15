export class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `This ${this.client} owes ${this.details} this amount: ${this.amount}`;
    }
}
