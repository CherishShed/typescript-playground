const myForm = document.querySelector('form');
const selectType = document.getElementById("type") as HTMLSelectElement;
const from = document.getElementById("tofrom") as HTMLInputElement;
const details = document.getElementById("details") as HTMLInputElement;
const amount = document.getElementById("amount") as HTMLInputElement;

    
myForm?.addEventListener('submit', (event: any) => {
    event.preventDefault();

    console.log({from:from?.value,details:details?.value, amount:amount?.value, selectType:selectType?.value})
    
})
