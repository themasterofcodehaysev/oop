var bankAccountType = /** @class */ (function () {
    function bankAccountType(name, balance) {
        this.name = name;
        this.balance = balance;
    }
    bankAccountType.prototype.debit = function (amount) {
        this.balance -= amount;
    };
    return bankAccountType;
}());
var myAccount = new bankAccountType("John Doe", 1000);
console.log(account.balance);
myAccount.debit(200);
console.log(account.balance);
