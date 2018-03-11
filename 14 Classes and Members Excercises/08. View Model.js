// $ = require('jquery');
class TextBox {
    constructor(selector, regex) {
        this.selector = selector;
        this._elements = $(selector);
        this._invalidSymbols = regex;

        let that=this
        $(selector).on('input change',function () {
            that.value=$(this).val()
        })
    }

    get value() {
        return $(this.selector).val();
    }

    set value(v) {
        $(this.selector).val(v);
    }

    get elements() {
        return this._elements;
    }
    isValid(){
       return !this._invalidSymbols.test($(this.selector).val())
    }
}

let textbox = new TextBox(".textbox",/[^a-zA-Z0-9]/);
let inputs = $('.textbox');