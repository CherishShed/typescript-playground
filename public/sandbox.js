"use strict";
const myForm = document.querySelector('form');
const selectType = document.getElementById("type");
const from = document.getElementById("tofrom");
const details = document.getElementById("details");
const amount = document.getElementById("amount");
myForm === null || myForm === void 0 ? void 0 : myForm.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log({ from: from === null || from === void 0 ? void 0 : from.value, details: details === null || details === void 0 ? void 0 : details.value, amount: amount === null || amount === void 0 ? void 0 : amount.value, selectType: selectType === null || selectType === void 0 ? void 0 : selectType.value });
});
class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `This ${this.client} owes ${this.details} this amount: ${this.amount}`;
    }
}
class Payment {
    constructor(receipient, details, amount) {
        this.receipient = receipient;
        this.details = details;
        this.amount = amount;
    }
}
