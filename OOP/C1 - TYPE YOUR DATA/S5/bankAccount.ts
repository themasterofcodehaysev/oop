
class bankAccountType {
    name:string;
    balance:number;
    constructor(name:string,balance:number){
        this.name = name;
        this.balance = balance;

    }

    debit(amount: number) {
        this.balance -= amount;
    }
    

}

const myAccount = new bankAccountType("John Doe", 1000);
console.log(account.balance); 

myAccount.debit(200);
console.log(account.balance);