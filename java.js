let firstNum = prompt ('Enter first number');
let secondNum = prompt ('Enter second number');
let operator = prompt ('Enter operator');


const add = function (a, b) {
    return a+b;
};

const multiply = function (a, b) {
    return a*b;
};

const subtract = function (a, b) {
    return a-b;
}

const divide = function (a, b) {
    return a/b;
}

const operate = function (operator) {
    if (operator === '+') return add (Number(firstNum), Number(secondNum));
    if (operator === '-') return subtract (Number(firstNum), Number(secondNum));
    if (operator === '*') return multiply (Number(firstNum), Number(secondNum));
    if (operator === '/') return divide (Number(firstNum), Number(secondNum));
}

console.log(operate (operator));