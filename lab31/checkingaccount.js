/*jshint  esversion:6, globalstrict:false */
const account = require('./account.js');
module.exports = class CheckingAccount extends 
account{
    constructor(number, overdraft){
        super(number);
        this._overdraft = overdraft;
    }
    getOverdraft(){
        return this._overdraft;
    }
    setOverdraft(overdraft){
this._overdraft = overdraft;
    }
    withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (amount > (this._balance + this._overdraft )){
            throw Error("Insufficient funds, we're sorry beyond the overdraft");
        }
        this._balance -= amount;
        
    }

    toString() {
        return "Account " + this._number + ": balance " + this._balance + "Overdraft amount is " + this._overdraft;
    }
};