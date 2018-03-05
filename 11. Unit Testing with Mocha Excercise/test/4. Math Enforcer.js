let expect = require("chai").expect;
let assert = require("chai").assert;
const mathEnforcer = require('../04. Math Enforcer')
describe('mathEnforcer', () => {
    describe('addFive cases', () => {
        it('param not a number', () => {
            expect(mathEnforcer.addFive('pesho')).to.equal(undefined);
        });
        it('if a number add five', () => {
            expect(mathEnforcer.addFive(5)).to.equal(5+5);
        });
      it('if a negative number add five', () => {
            expect(mathEnforcer.addFive(-5)).to.equal(-5+5);
        });
      it('if float number add 5', () => {
            assert.closeTo(mathEnforcer.addFive(10.03),15.039,0.01);
        });
    });

     describe('subtract 10 cases', () => {
        it('param not a number', () => {
            expect(mathEnforcer.subtractTen('pesho')).to.equal(undefined);
        });
        it('if a number subtract 10', () => {
            expect(mathEnforcer.subtractTen(5)).to.equal(5-10);
        });
        it('if a negative number subtract 10', () => {
            expect(mathEnforcer.subtractTen(-5)).to.equal(-5-10);
        });
        it('if float number subtract 10', () => {
            assert.closeTo(mathEnforcer.subtractTen(10.03),0.039,0.01);
        });
    });

     describe('sum nums cases', () => {
        it('param2 not a number', () => {
            expect(mathEnforcer.sum('pesho',1)).to.equal(undefined);
        });
        it('param1 not a number', () => {
            expect(mathEnforcer.sum(1,'pesho')).to.equal(undefined);
        });
        it('if  numbers sum', () => {
            expect(mathEnforcer.sum(5,10)).to.equal(5+10);
        });
        it('if negative numbers sum', () => {
            expect(mathEnforcer.sum(-5,-10)).to.equal(-5-10);
        });
        it('if float numbers sum', () => {
            assert.closeTo(mathEnforcer.sum(5.01,10.03),15.049,0.01);
        });
    });
});