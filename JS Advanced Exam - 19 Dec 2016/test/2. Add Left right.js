let expect = require("chai").expect;
const makeList = require('../2. Add left right')

describe("list test", function () {
    let list={}
    beforeEach(function () {
        list = makeList()
    })
    it("test if data length is empty", function () {
        expect(list.toString()).to.be.equal('')
    });
    it("test if data length is empty", function () {
        list.addLeft(0)
        expect(list.toString()).to.be.equal('0')
    });
    it("test if data length is empty", function () {
        list.addRight('two')
        expect(list.toString()).to.be.equal('two')
    });
    it("test if data length is empty", function () {
        list.addLeft(0)
        list.addLeft(6)
        list.addRight('two')
        list.addRight(1)
        expect(list.toString()).to.be.equal('6, 0, two, 1')
    });
    it("test if data length is empty", function () {
        list.addLeft(0)
        list.addLeft(6)
        list.addRight('two')
        list.addRight(1)
        list.clear()
        expect(list.toString()).to.be.equal('')
    });
    it("test if data length is empty", function () {
        expect(list.addLeft).to.exist;
        expect(list.addRight).to.exist;
        expect(list.clear).to.exist;
        expect(list.toString()).to.exist;
    });

});