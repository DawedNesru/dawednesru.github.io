/*jshint  esversion:6, globalstrict:false */
const account = require('../account.js');


const assert  = require('chai').assert;
const account1 = new account(45);


describe('Deposit', function(){
   
   account1.deposit(4000);
   const result = account1.getBalance();
    it('should increase balance', function(){
assert.equal(result, 4000);
    });
});

describe('Withdrawal', function(){
   
    account1.withdraw(2000);
   const result = account1.getBalance();
    it('should reduce balance', function(){
assert.equal(result, 2000);
    });
});

describe('GetBalance', function(){
    const result = account1.getBalance();
   it('should display Balance of the customer', function(){
assert.equal(result, 2000);
   });
});

describe('GetNumber', function(){
    const result = account1.getNumber();
   it('should display the account number of the customer', function(){
assert.equal(result, 45);
   });
});

describe('ToString', function(){
    const result = account1.toString();
   it('should display the content', function(){
assert.equal(result, "Account " + 45 + ": balance " + 2000);
   });
});

