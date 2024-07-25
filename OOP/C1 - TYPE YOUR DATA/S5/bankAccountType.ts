type bankAccount = {
  balance: number,
  name: string
}

let account:bankAccount = { balance:10000, name:'hay'};

function debit(account: bankAccount, valueDollar:number){
  account.balance - valueDollar;
}

function credit(account: bankAccount, valueDollar:number){
  account.balance + valueDollar;
}

console.log(debit(account,100));
console.log(credit(account,200));