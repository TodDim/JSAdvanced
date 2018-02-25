let f = (function () {
    let counter = 0;
    return function () {
        console.log(++counter);
    }
})();
f()
f()
f()
f()