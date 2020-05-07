/*jshint  esversion:6, globalstrict:false */
const savingsaccount = require('../savingsaccount.js');


const assert  = require('chai').assert;
const savingsaccount1 = new savingsaccount(45, 0.12);


describe('Deposit', function(){
   
    savingsaccount1.deposit(4000);
   const result = savingsaccount1.getBalance();
    it('should increase balance', function(){
assert.equal(result, 4000);
    });
});


describe('Add Interest', function(){
   
    savingsaccount1.addInterest();
   const result = savingsaccount1.getBalance();
    it('should increase balance with interest', function(){
assert.equal(result, 4004.8);
    });
});


describe('GetInterest', function(){
    const result = savingsaccount1.getInterest();
   it('should display the interest of the customer', function(){
assert.equal(result, 0.12);
   });
});

describe('ToString', function(){
    const result = savingsaccount1.toString();
   it('should display the content', function(){
assert.equal(result, "Account " + 45 + ": balance " + 4004.8 + "interest is " + 0.12);
   });
});

