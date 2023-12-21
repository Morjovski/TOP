const fibonacci = function(digit) {
    let fibonacciList = [];

    if (typeof digit !== 'number') {
        digit = parseInt(digit);
    };

    if (digit < 0) return "OOPS";
    if (digit == 0) return 0;

    for (let i = 0; i < digit; i++) {
        if (fibonacciList.length < 2) {
            fibonacciList.push(1);
        } else {
            fibonacciList.push(fibonacciList[i - 1] + fibonacciList[i - 2])
        };
    };

    return fibonacciList[fibonacciList.length - 1] 
};

// Do not edit below this line
module.exports = fibonacci;

console.log(fibonacci("8"))