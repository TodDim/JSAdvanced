let expect = require("chai").expect;
let assert = require("chai").assert;
let jsdom = require('jsdom-global')();
$ = require('jquery');
const Sumator = require('../Problem 2. Sumator Class')

describe("sumator test", function () {
    let sumator;
    beforeEach(function () {
        sumator = new Sumator()
    })
    it("test if data length is empty", function () {
        expect(sumator.data.length).to.be.equal(0)
    });
    describe('add func test', function () {
        it("add only numbers", function () {
            sumator.add(5)
            sumator.add(4)
            sumator.add(3)
            expect(sumator.toString()).to.be.equal('5, 4, 3')
        });
        it("add only objects", function () {
            sumator.add({name: 'Pesho'})
            sumator.add(3)
            expect(sumator.toString()).to.be.equal('[object Object], 3')
        });
    })
    describe('sumNums', function () {
        it("sum only numbers", function () {
            sumator.add(5)
            sumator.add(4)
            sumator.add(3)
            expect(sumator.sumNums()).to.be.equal(12)
        });
        it("add misc", function () {
            sumator.add({name: 'Pesho'})
            sumator.add('Gosho')
            expect(sumator.sumNums()).to.be.equal(0)
        });
        it("add misc2", function () {
            sumator.add([])
            sumator.add(3)
            sumator.add(4)
            expect(sumator.sumNums()).to.be.equal(7)
        });
    })
    describe('test remove by filter', function () {
        it("removed all odd numbers", function () {
            for (let i = 0; i <= 10; i++) {
                sumator.add(i)
            }
            sumator.removeByFilter((x) => x % 2 !== 0)
            expect(sumator.data.join(', ')).to.be.equal('0, 2, 4, 6, 8, 10')
        });
        it("throws exception", function () {
            for (let i = 0; i <= 5; i++) {
                sumator.add(i)
            }
            // sumator.removeByFilter((x) => x % 2 !== 0)
            expect(() => sumator.removeByFilter(undefined).to.throw())
        });
    })
    describe('test toString()', function () {
        it("with items in array", function () {
            sumator.add(4)
            sumator.add('Gosho')
            expect(sumator.toString()).to.be.equal('4, Gosho')
        });
        it("without items in array", function () {
            expect(sumator.toString()).to.be.equal('(empty)')
        });
    })
    describe('check if func exist', function () {
        it("data is not undefined", function () {
            expect(sumator.data!==undefined).to.be.equal(true)
        });
        it("add func exists", function () {
            expect(Sumator.prototype.hasOwnProperty('add')).to.be.equal(true)
        });
        it("sumNums func exists", function () {
            expect(Sumator.prototype.hasOwnProperty('sumNums')).to.be.equal(true)
        });
        it("removeByFilter func exists", function () {
            expect(Sumator.prototype.hasOwnProperty('removeByFilter')).to.be.equal(true)
        });
        it("toString func exists", function () {
            expect(Sumator.prototype.hasOwnProperty('toString')).to.be.equal(true)
        });
    })
});