let expect = require("chai").expect;
let jsdom = require('jsdom-global')();
$ = require('jquery');
const nuke = require('../6. ArmageDOM')

describe('armagedom', () => {
    let targetHtml
    beforeEach(function () {
        document.body.innerHTML = `<body>
<div id="target">
<div class="nested target">
<p>This is some text</p>
</div>
<div class="target">
<p>Empty div</p>
</div>
<div class="inside">
<span class="nested">Some more text</span>
<span class="target">Some more text</span>
</div>
</div>
</body>`
        targetHtml = $('#target')
    })
    it('with valid and invalid selector', () => {
        let selector1 = $('#inside')
        let selector2 = 2
        let oldHtml = targetHtml.html()
        nuke(selector1, selector2)
        expect(targetHtml.html()).to.be.equal(oldHtml);
    });
    it('with equal selectors', () => {
        let selector1 = $('.inside')
        let oldHtml = targetHtml.html()
        nuke(selector1, selector1)
        expect(targetHtml.html()).to.be.equal(oldHtml);
    });
    it('with valid selectors', () => {
        let selector1 = $('.nested')
        let selector2 = $('.target')
        let oldHtml = targetHtml.html()
        nuke(selector1, selector2)
        expect(targetHtml.html()).to.not.equal(oldHtml);
    });
     it('with valid selectors who do not remove anything', () => {
        let selector1 = $('.nested')
        let selector2 = $('.inside')
        let oldHtml = targetHtml.html()
        nuke(selector1, selector2)
        expect(targetHtml.html()).to.be.equal(oldHtml);
    });
})
