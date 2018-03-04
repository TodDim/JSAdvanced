function generateExtensibleObject() {
    let myObj = {};

    myObj.extend = function (source) {
        for (let prop in source) {
            if (source.hasOwnProperty(prop)) {
                if (typeof source[prop] == 'function') {
                    myObj[prop]=source[prop]
                    // myObj.__proto__[prop] = source[prop]       //едно и също с долния ред    -
                    // Object.getPrototypeOf(myObj)[prop] = source[prop]
                } else {
                    myObj[prop] = source[prop]
                }
            }
        }
    };

    return myObj;
}
let obj=generateExtensibleObject()

obj.extend({
extensionMethod: function () {return 'alal'},
extensionProperty: 'someString'
})

let obj2=Object.create(obj)

console.log(obj2.extensionMethod());

