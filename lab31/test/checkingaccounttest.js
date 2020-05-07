/*jshint  esversion:6, globalstrict:false */
const checkingaccount = require('../checkingaccount.js');


const assert  = require('chai').assert;
const checkingaccount1 = new checkingaccount(45, 5000);


describe('Deposit', function(){
   
    checkingaccount1.deposit(4000);
   const result = checkingaccount1.getBalance();
    it('should increase balance', function(){
assert.equal(result, 4000);
    });
});

describe('Withdrawal', function(){
   
    checkingaccount1.withdraw(9000);
   const result = checkingaccount1.getBalance();
    it('should withdraw', function(){
assert.equal(result, -5000);
    });
});

describe('Get Overdraft', function(){
    const result = checkingaccount1.getOverdraft();
   it('should display the overdraft of the customer', function(){
assert.equal(result, 5000);
   });
});

describe('ToString', function(){
    const result = checkingaccount1.toString();
   it('should display the content', function(){
assert.equal(result, "Account " + 45 + ": balance " + -5000 + "Overdraft amount is " + 5000);
   });
});

