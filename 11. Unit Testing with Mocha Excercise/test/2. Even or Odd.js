let isOddOrEven = require('../2. Even or Odd');
let expect = require('chai').expect;
// let assert = require('chai').assert;

describe('isOddOrEven', () => {
    it('number to return undefined', () => {
        expect(isOddOrEven(13)).to.equal(undefined)
    })
     it('object to return undefined', () => {
        expect(isOddOrEven({name:'pesho'})).to.equal(undefined)
    })
    it('string with even length', () => {
        expect(isOddOrEven('da')).to.equal('even')
    })
    it('string with odd length', () => {
         expect(isOddOrEven('a')).to.equal('odd')
    })
    it('emty string', () => {
        expect(isOddOrEven('')).to.equal('even')
    })
})