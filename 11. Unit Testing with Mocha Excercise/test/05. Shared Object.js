let expect = require("chai").expect;
let assert = require("chai").assert;
let jsdom = require('jsdom-global')();
$ = require('jquery');
const sharedObject = require('../05. Shared Object')
document.body.innerHTML = `<body>
<div id="wrapper">
    <input type="text" id="name">
    <input type="text" id="income">
</div>
</body>`

describe('sharedObject', () => {

    describe('initial value', () => {
        it('initial name', () => {
            expect(sharedObject.name).to.be.null;
        });
        it('initial value', () => {
            expect(sharedObject.income).to.be.null;
        });
    });

    describe('changeName', () => {
        it('pass empty string', () => {
            sharedObject.changeName('')
            expect(sharedObject.name).to.be.null;
        });
        it('pass nonempty string', () => {
            sharedObject.changeName('pesho')
            expect(sharedObject.name).to.be.equal('pesho');
        });
    });
    describe('Name input tests', () => {
        it('pass empty string', () => {
            sharedObject.changeName('nakov')
            sharedObject.changeName('')
            let name = $('#name')
            expect(name.val()).to.be.equal('nakov');
        });
        it('pass nonempty string', () => {
            sharedObject.changeName('pesho')
            let name = $('#name')
            expect(name.val()).to.be.equal('pesho');
        });
    })

    describe('change income tests', () => {
        it('with a string stay 0', () => {
            sharedObject.changeIncome('n')
            expect(sharedObject.income).to.be.null;
        });
        it('with a floating point ', () => {
            sharedObject.changeIncome(5)
            sharedObject.changeIncome(4.11)
            expect(sharedObject.income).to.be.equal(5);
        });
        it('with a negative number ', () => {
            sharedObject.changeIncome(5)
            sharedObject.changeIncome(-4)
            expect(sharedObject.income).to.be.equal(5);
        });
        it('with a zero  ', () => {
            sharedObject.changeIncome(5)
            sharedObject.changeIncome(0)
            expect(sharedObject.income).to.be.equal(5);
        });
        it('with a positive change correctly  ', () => {
            sharedObject.changeIncome(5)
            expect(sharedObject.income).to.be.equal(5);
        });
    })

    describe('income input tests', () => {
        it('with a string should not change corrcetly', () => {
            sharedObject.changeIncome(5)
            sharedObject.changeIncome('n')
            let income=$('#income')
            expect(income.val()).to.be.equal('5')
        });
        it('with a positive number', () => {
            sharedObject.changeIncome(5)
            let income=$('#income')
            expect(income.val()).to.be.equal('5')
        });
        it('with a floating number', () => {
            sharedObject.changeIncome(5)
            sharedObject.changeIncome(2.12)
            let income=$('#income')
            expect(income.val()).to.be.equal('5')
        });
        it('with a nrgative number', () => {
            sharedObject.changeIncome(5)
            sharedObject.changeIncome(-5)
            let income=$('#income')
            expect(income.val()).to.be.equal('5')
        });
        it('with a zero number', () => {
            sharedObject.changeIncome(5)
            sharedObject.changeIncome(0)
            let income=$('#income')
            expect(income.val()).to.be.equal('5')
        });
    })
    describe('update name tests', () => {
        it('with a empty stringsould not change', () => {
            sharedObject.changeName('Viktor')
            let name=$('#name')
            name.val('')
            sharedObject.updateName()
            expect(sharedObject.name).to.be.equal('Viktor');
        });
        it('with a nonempty string sould  change', () => {
            sharedObject.changeName('Viktor')
            let name=$('#name')
            name.val('Kiril')
            sharedObject.updateName()
            expect(sharedObject.name).to.be.equal('Kiril');
        });
    })
    describe('update income tests', () => {
        it('with a string sould not change', () => {
            sharedObject.changeIncome(3)
            let income=$('#income')
            income.val('str')
            sharedObject.updateIncome()
            expect(sharedObject.income).to.be.equal(3);
        });
         it('with a floating sould not change', () => {
            sharedObject.changeIncome(3)
            let income=$('#income')
            income.val(3.11)
            sharedObject.updateIncome()
            expect(sharedObject.income).to.be.equal(3);
        });
         it('with a negative sould not change', () => {
            sharedObject.changeIncome(3)
            let income=$('#income')
            income.val(-3)
            sharedObject.updateIncome()
            expect(sharedObject.income).to.be.equal(3);
        });
         it('with a zero sould not change', () => {
            sharedObject.changeIncome(3)
            let income=$('#income')
            income.val(0)
            sharedObject.updateIncome()
            expect(sharedObject.income).to.be.equal(3);
        });
         it('with a positive sould change', () => {
            sharedObject.changeIncome(3)
            let income=$('#income')
            income.val(5)
            sharedObject.updateIncome()
            expect(sharedObject.income).to.be.equal(5);
        });
    })

});