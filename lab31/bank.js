/*jshint  esversion:6, globalstrict:false */
const account = require('./account.js');
const savingsaccount = require('./savingsaccount.js');
const checkingaccount = require('./checkingaccount.js');
class Bank{
constructor(){
    accounts = [];
}
addAccount(number){
   accounts.push(new account(number));
}
addSavingsAccount(number, interest){
    accounts.push(new savingsaccount(number, interest));
}
addCheckingAccount(number, overdraft){
    accounts.push(new checkingaccount(number, overdraft));
}
 closeAccount(number){
    accounts.pop(accounts.find(ac=>ac.number === number));
}
}