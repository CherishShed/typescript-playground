const myForm = document.querySelector('form');
const selectType = document.getElementById("type") as HTMLSelectElement;
const from = document.getElementById("tofrom") as HTMLInputElement;
const details = document.getElementById("details") as HTMLInputElement;
const amount = document.getElementById("amount") as HTMLInputElement;

    
myForm?.addEventListener('submit', (event: any) => {
    event.preventDefault();

    console.log({from:from?.value,details:details?.value, amount:amount?.value, selectType:selectType?.value})
    
})

class Invoice{
    client:string
    details:string
    amount:number
    
    constructor(client:string, details:string, amount:number){
        this.client = client
        this.details = details
        this.amount = amount
    }

    format(){
        return `This ${this.client} owes ${this.details} this amount: ${this.amount}`
    }
}

class Payment{
    receipient:string
    details:string
    amount:number
    
    constructor(receipient:string, details:string, amount:number){
        this.receipient = receipient
        this.details = details
        this.amount = amount
    }
}