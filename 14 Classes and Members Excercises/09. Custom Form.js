let result = (function () {
    class Textbox {
        constructor(selector, regex) {
            this.selector = selector;
            this._elements = $(selector);
            this._invalidSymbols = regex;

            let that = this
            $(selector).on('input change', function () {
                that.value = $(this).val()
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

        isValid() {
            return !this._invalidSymbols.test($(this.selector).val())
        }
    }

    class Form {
        constructor(...boxes){
            this._element = $('<div>').addClass('form');
            this._textboxes=boxes
            for (let box of boxes) {
                if(!box instanceof Textbox){
                    throw Error('No instance of Textbox')
                }
            }
            for (let box of boxes) {
               this._element.append($(box.selector));
            }

        }
        submit(){
            let b=true

            for (let box of this._textboxes) {
                if (box.isValid()===true){
                    $(box.selector).css('border','2px solid green')
                }
                else{
                   $(box.selector).css('border','2px solid red')
                    b=false
                }
            }
            return b
        }
        attach(selector){
            $(selector).append(this._element)
        }
    }

    return {Textbox, Form}
})()

let Textbox = result.Textbox;
let Form = result.Form;
let username = new Textbox("#username", /[^a-zA-Z0-9]/);
let password = new Textbox("#password", /[^a-zA-Z]/);
username.value = "username";
password.value = "password2";
let form = new Form(username, password);
form.attach("#root");