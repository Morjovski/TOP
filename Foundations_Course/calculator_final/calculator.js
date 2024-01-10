function add(firstNum, secondNum) {

    if (String(firstNum).includes('%')) {
        secondNum = Number(secondNum);
        return secondNum + secondNum * percent(firstNum);
    } else if (String(secondNum).includes('%')) {
        firstNum = Number(firstNum);
        return firstNum + firstNum * percent(secondNum);
    };

    return Number(firstNum) + Number(secondNum);
};

function subtract(firstNum, secondNum) {

    if (String(firstNum).includes('%')) {
        secondNum = Number(secondNum);
        return secondNum - secondNum * percent(firstNum);
    } else if (String(secondNum).includes('%')) {
        firstNum = Number(firstNum);
        return firstNum - firstNum * percent(secondNum);
    };

    return firstNum - secondNum;
};

function multiply(firstNum, secondNum) {

    if (String(firstNum).includes('%')) {
        firstNum = percent(firstNum);
        secondNum = Number(secondNum);
        return secondNum * firstNum;
    } else if (String(secondNum).includes('%')) {
        firstNum = Number(firstNum);
        secondNum = percent(secondNum);
    };

    return firstNum * secondNum;
};

function divide(firstNum, secondNum) {
    let result;

    if (secondNum == 0) {
        result = divideZero;
    } else {
        if (String(firstNum).includes('%')) {
            firstNum = percent(firstNum);
            secondNum = Number(secondNum);
            result = firstNum == 0 ? divideZero : secondNum / firstNum;
        } else if (String(secondNum).includes('%')) {
            firstNum = Number(firstNum);
            secondNum = percent(secondNum);
            result = secondNum == 0 ? divideZero : firstNum / secondNum;
        } else {
            result = firstNum / secondNum;
        };
    };

    return result;
};

function percent(num) {

    num = Number(num.slice(0, -1));

    if (num == 0) {
        return 0;
    };

    return num / 100;
};

function operate(arr) {
    let result;
    let operator;
    let calculate;
    let firstNum;
    let secondNum;

    while (arr.length != 1) {

        calculate = arr.slice(0, 3);

        firstNum = calculate[0];
        operator = calculate[1];
        secondNum = calculate[2];

        if (operator === '+') {
            result = add(firstNum, secondNum);
        } else if (operator === '-') {
            result = subtract(firstNum, secondNum);
        } else if (operator === '*') {
            result = multiply(firstNum, secondNum);
        } else if (operator === '/') {
            result = divide(firstNum, secondNum);
        };

        arr.splice(0, 3, result);
    };

    result = arr[0];

    if (String(result).includes('.')) {
        
        result = result.toFixed(2);

        while (true) {
            let lastNum = result.slice(-1);
            if (lastNum == 0 || lastNum === '.') {
                result = result.slice(0, -1);
            } else {
                break;
            };
        };
    };

    if (String(result).length > 10) {
        result = result.toExponential();
    };

    return result;
};

function setTime() {
    let clock = new Date();
    let hours = clock.getHours();
    let minutes = clock.getMinutes();
    
    minutes = minutes < 10 ? "0" + minutes : minutes;

    actualTime.innerHTML = hours + ":" + minutes;
};


let outputString;
let divideZero = "Don't do that! Baka";

const userOutput = document.querySelector('.userOutput');
const displayValue = document.querySelector('.displayValue');
const clear = document.querySelector('#clear');
const input = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equal = document.querySelector('.equal');
const backSpace = document.querySelector('#backspace');
const actualTime = document.querySelector('#clock');
const floatType = document.querySelector('#float');

clear.addEventListener('click', () => {
    userOutput.innerHTML = '';
    displayValue.innerHTML = '';
    outputString = [];
});

backSpace.addEventListener('click', () => {
    let len = userOutput.textContent.length;
    userOutput.innerHTML = userOutput.textContent.slice(0, len - 1);
});

input.forEach((element) => {
    element.addEventListener('click', () => {
        if (equal.disabled) {
            userOutput.innerHTML = '';
            displayValue.innerHTML = '';
            equal.disabled = false;
        };

        let output = userOutput.textContent;
        let digit = element.textContent;
        userOutput.innerHTML = output + digit;

        if (userOutput.textContent.includes('.')) {
            floatType.disabled = true;
        };

    });
});

operators.forEach((element) => {
    element.addEventListener('click', () => {
        let num = userOutput.textContent;
        let operator = element.textContent;

        if (floatType.disabled) {
            floatType.disabled = false;
        };

        if (equal.disabled) {
            displayValue.innerHTML = num + ' ' + operator + ' ';
            equal.disabled = false;
        } else {
            displayValue.innerHTML += num + ' ' + operator + ' ';
        };

        userOutput.innerHTML = '';
    });
});

equal.addEventListener('click', () => {
    outputString = displayValue.textContent + userOutput.textContent;
    displayValue.innerHTML = outputString;
    outputString = outputString.split(' ');
    let result = operate(outputString);
    userOutput.innerHTML = result;
    equal.disabled = true;
});

setTime();
setInterval(setTime, 1000);