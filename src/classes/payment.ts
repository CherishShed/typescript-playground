import { formatter } from "../interfaces/formatter"

export class Payment implements formatter{
    receipient:string
    details:string
    amount:number
    
    constructor(receipient:string, details:string, amount:number){
        this.receipient = receipient
        this.details = details
        this.amount = amount
    }

    format(){
        return `This ${this.receipient} collected $${this.amount} from ${this.details}`
    }
}