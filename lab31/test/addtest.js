/*jshint  esversion:6, globalstrict:false */
const calc = require('../add.js');


const assert  = require('chai').assert;

describe('add', function(){
   const calc1 = new calc();
    const result = calc1.addme(5,7);
    it('should add two numbers', function(){
assert.equal(result, 12);
    });
});