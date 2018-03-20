const PaymentPackage = require('../02')
const expect = require('chai').expect

describe("payment pack test", function () {
    let pack
    beforeEach(function () {
        pack = new PaymentPackage('da', 1)
    })

    it("It should have initialized all methods", function () {
        expect(Object.getPrototypeOf(pack).hasOwnProperty('toString')).to.be.equal(true)
        expect(Object.getPrototypeOf(pack).hasOwnProperty('name')).to.be.equal(true)
        expect(Object.getPrototypeOf(pack).hasOwnProperty('value')).to.be.equal(true)
        expect(Object.getPrototypeOf(pack).hasOwnProperty('VAT')).to.be.equal(true)
        expect(Object.getPrototypeOf(pack).hasOwnProperty('active')).to.be.equal(true)
    })
    it("append Error", function () {
        expect(() => pack.name('').to.throw(Error))
        expect(() => pack.name(0).to.throw(Error))
        expect(() => pack.name(5).to.throw(Error))
        expect(() => pack.name(true).to.throw(Error))
        expect(() => pack.name({}).to.throw(Error))
    })
    it("append Error", function () {
        expect(() => pack.name('ivan').to.be.equal('ivan'))
    })
    it("append Error", function () {
        expect(() => pack.value(-5).to.throw(Error))
        expect(() => pack.value(0).to.be.equal(0))
        expect(() => pack.value.to.be.equal(1))
        expect(() => pack.value('da').to.throw(Error))
        expect(() => pack.value(true).to.throw(Error))
        expect(() => pack.value('').to.throw(Error))
        expect(() => pack.value({}).to.throw(Error))
    })
    it("append Error", function () {
        expect(() => pack.value(6).to.be.equal(6))
        expect(() => pack.value(0).to.be.equal(0))
    })
    it("append Error", function () {
        expect(() => pack.VAT(-5).to.throw(Error))
        expect(() => pack.VAT('da').to.throw(Error))
        expect(() => pack.VAT('').to.throw(Error))
        expect(() => pack.VAT({}).to.throw(Error))
        expect(() => pack.VAT(true).to.throw(Error))
    })
    it("append Error", function () {
        expect(() => pack.VAT(10).to.be.equal(10))
        expect(() => pack.VAT.to.be.equal(20))
        expect(() => pack.VAT(0).to.be.equal(0))
    })
    it("append Error", function () {
        expect(() => pack.active(-5).to.throw(Error))
        expect(() => pack.active('da').to.throw(Error))
        expect(() => pack.active('').to.throw(Error))
        expect(() => pack.active(null).to.throw(Error))
        expect(() => pack.active(5).to.throw(Error))
        expect(() => pack.active([]).to.throw(Error))
    })
    it("It should return same string", function () {
        expect(() => {pack = new PaymentPackage('da')}).to.throw(Error)
        expect(() => {pack = new PaymentPackage('',5)}).to.throw(Error)
        expect(() => {pack = new PaymentPackage()}).to.throw(Error)
    })
    it("It should return same string", function () {
        expect(pack.name).to.be.equal('da')
    })
    it("It should return same string", function () {
        expect(pack.active).to.be.equal(true)
        pack.active = false
        expect(pack.active).to.be.equal(false)
    })
    it("It should return same string", function () {
        expect(pack.toString()).to.be.equal(`Package: da\n- Value (excl. VAT): 1\n- Value (VAT 20%): 1.2`)
        pack.active = false
        expect(pack.toString()).to.be.equal(`Package: da (inactive)\n- Value (excl. VAT): 1\n- Value (VAT 20%): 1.2`)
        pack.VAT = 0
        pack.value = 2
        pack.name = 'ne'
        expect(pack.toString()).to.be.equal(`Package: ne (inactive)\n- Value (excl. VAT): 2\n- Value (VAT 0%): 2`)
    })
    it("It should return same string", function () {
        expect(pack.toString()).to.be.equal(`Package: da\n- Value (excl. VAT): 1\n- Value (VAT 20%): 1.2`)
        pack.VAT = 0
        pack.value = 2
        pack.name = 'ne'
        expect(pack.toString()).to.be.equal(`Package: ne\n- Value (excl. VAT): 2\n- Value (VAT 0%): 2`)
    })
})