import { formatter } from "../interfaces/formatter"
export class Invoice implements formatter{
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