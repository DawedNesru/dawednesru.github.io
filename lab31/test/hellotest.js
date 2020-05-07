
/*jshint  esversion:6, globalstrict:false */
//*global assert, Account, SavingsAccount, Bank */ 
const hello = require('../hello.js');
const assert = require('chai').assert;
describe('hello', function(){

    it('hello returns hello world', function(){
        assert.equal(hello(), 'hello world');
    });
});

