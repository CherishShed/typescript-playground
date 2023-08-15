import {Invoice} from "./classes/invoice.js"
import { Payment } from "./classes/payment.js";

const myForm = document.querySelector('form');
const selectType = document.getElementById("type") as HTMLSelectElement;
const from = document.getElementById("tofrom") as HTMLInputElement;
const details = document.getElementById("details") as HTMLInputElement;
const amount = document.getElementById("amount") as HTMLInputElement;


myForm?.addEventListener('submit', (event: any) => {
    event.preventDefault();
    const thing = (selectType.value === "invoice")?new Invoice(from.value, details.value, parseInt(amount?.value)):new Payment(from.value, details.value, parseInt(amount?.value)); 

    console.log(thing.format());
})
