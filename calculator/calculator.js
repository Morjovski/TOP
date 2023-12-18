const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(arr) {
	return arr.reduce((sum, int) => sum + int, 0)
};

const multiply = function(arr) {
    return arr.reduce((result, int) => result * int, 1)
};

const power = function(a, b) {
	return a ** b
};

const factorial = function(int) {
    result = 1;
	for (int; int > 0; int--) {
        result *= int;
    };
    return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};