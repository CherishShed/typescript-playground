import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payment.js";
const myForm = document.querySelector('form');
const selectType = document.getElementById("type");
const from = document.getElementById("tofrom");
const details = document.getElementById("details");
const amount = document.getElementById("amount");
myForm === null || myForm === void 0 ? void 0 : myForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const thing = (selectType.value === "invoice") ? new Invoice(from.value, details.value, parseInt(amount === null || amount === void 0 ? void 0 : amount.value)) : new Payment(from.value, details.value, parseInt(amount === null || amount === void 0 ? void 0 : amount.value));
    console.log(thing.format());
});
