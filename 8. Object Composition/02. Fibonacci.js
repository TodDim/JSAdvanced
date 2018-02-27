let fib = function getFibonator() {
    console.log('1');
    let f0 = 0, f1 = 1;
    return function () {
        let f2 = f0 + f1;
        f0 = f1;
        f1 = f2;
        return f1;
    };
}()

console.log(fib());; // 1
console.log(fib());; // 1
console.log(fib());; // 1



