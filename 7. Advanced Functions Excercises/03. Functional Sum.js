// function add(num) {
//     let sum = num;
//
//     function calc(num2) {
//         sum += num2;
//         return calc;
//     }
//
//     calc.toString = function() { return sum };
//     return calc;
// }
//
//
// let f=add(8)(7)
// console.log(f.toString());

// let f = (function () {
//     let total = 0;
//     return function sum(a) {
//         total += a;
//         sum.toString = () => total;
//         return sum;
//     }
// })();
//
//
// let res=f(6)(7)
// console.log(res.toString());

 function add(num) {
    let total = num;
    return function sum(a) {
        total += a;
        sum.toString = () => total;
        return sum;
    }
}

let res=add(6)(7)
console.log(res.toString());