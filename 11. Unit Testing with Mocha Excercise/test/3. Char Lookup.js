let lookupChar = require('../3. Char Lookup');
let expect = require('chai').expect;

describe('lookUphar', () => {
    it('not string', () => {
        expect(lookupChar(13,3)).to.equal(undefined)
    })
    it('index not number', () => {
        expect(lookupChar('gosho','pesho')).to.equal(undefined)
    })
    it('index not number', () => {
        expect(lookupChar('gosho',3.12)).to.equal(undefined)
    })
    it('index <0', () => {
        expect(lookupChar('gosho',-1)).to.equal('Incorrect index')
    })
    it('index >string length', () => {
        expect(lookupChar('gosho',5)).to.equal('Incorrect index')
    })
    it('returning correct char', () => {
        expect(lookupChar('gosho',0)).to.equal('g')
    })
    it('returning correct char', () => {
        expect(lookupChar('gosho',2)).to.equal('s')
    })
})