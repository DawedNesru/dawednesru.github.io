/*jshint  esversion:6, globalstrict:false */
const account = require('./account.js');
module.exports = class SavingsAccount extends account{
    constructor(number, interest){
        super(number);
        this._interest = interest;
    }
    getInterest(){
        return this._interest;
    }
    setInterst(interest){
this._interest = interest;
    }
    addInterest(){
        this.deposit(this.getBalance() * (this._interest * 0.01));
    }

    toString() {
        return "Account " + this._number + ": balance " + this._balance + "interest is " + this._interest;
    }
};