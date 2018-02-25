function formatCurrency(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2, 2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}
let formatter = getDollarFormatter(formatCurrency);
// console.log(formatter(5345));;
function getDollarFormatter(formatter) {
    function dollarFormatter(value) {
        return formatter(',', '$', true, value);
    };
    return dollarFormatter;
}

// console.log(getDollarFormatter(formatter(5345)));



