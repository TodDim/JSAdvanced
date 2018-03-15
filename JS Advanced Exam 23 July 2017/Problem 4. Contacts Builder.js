// class Contact {
//     constructor(firstName, lastName, phone, email) {
//         this.firstName = firstName
//         this.lastName = lastName
//         this.phone = phone
//         this.email = email
//         this.online=false
//     }
//
//
//     render(id) {
//         let fragment=document.createDocumentFragment()
//
//         let target = $(id)
//         let article = $('<article>')
//         let div1 = $(`<div>${this.firstName} ${this.lastName} </div>`)
//         div1.addClass('title')
//         let toggleBtn = $('<button>&#8505;</button>')
//         // let that=this
//         // $(toggleBtn).on('click',function () {
//         //     if(that.online=true){
//         //         that.online=false
//         //         $("div.title").removeClass('online')
//         //     }
//         //     else{
//         //        that.online=true
//         //         $("div.title").addClass('online')
//         //     }
//         //
//         // })
//         toggleBtn.appendTo(div1)
//         let div2 = $('<div>')
//         div2.addClass('info')
//         let spanphone = $(`<span>&phone; ${this.phone}</span>`)
//         let spanmail = $(`<span>&#9993; ${this.email}</span>`)
//         spanphone.appendTo(div2)
//         spanmail.appendTo(div2)
//
//         div1.appendTo(article)
//         div2.appendTo(article)
//
//         fragment.append(article)
//
//         target.append(fragment)
//     }
// }

class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.element = this.createElement();
        this.online = false;
    }

    get online() {
        return this._online;
    }

    set online(value) {
        this._online = value;
        this.update();
    }

    render(id) {
        $(`#${id}`).append(this.element);
    }

    update() {
        if(this._online){
            this.element.find('.title').addClass('online')
        } else {
            this.element.find('.title').removeClass('online')
        }
    }

    createElement() {
        let info = $('<div>')
            .addClass('info')
            .css('display', 'none');
        return $('<article>')
            .append($('<div>')
                .addClass('title')
                .text(this.firstName + ' ' + this.lastName)
                .append($('<button>')
                    .html('&#8505;')
                    .click(() => info.toggle())))
            .append(info
                .append($('<span>')
                    .html(`&phone; ${this.phone}`)
                    .append($('<span>')
                        .html(`&#9993; ${this.email}`))))
    }
}
let contacts = [
  new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
  new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
  new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
];
contacts.forEach(c => {
    console.log('da2');
    c.render('main')
});
setTimeout(() => contacts[1].online = true, 2000);