var account = { balance: 10000, name: 'hay' };
function debit(account, valueDollar) {
    account.balance - valueDollar;
}
function credit(account, valueDollar) {
    account.balance + valueDollar;
}
console.log(debit(account, 100));
console.log(credit(account, 200));
