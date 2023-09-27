let firstNum;
let secondNum;
let operator;


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

const nums = document.querySelectorAll('.numbers');
const result = document.querySelector('#result-bottom');
const operators = document.querySelectorAll('.operators');

nums.forEach(function (i) {
    i.addEventListener('click', (e) => {
        if (operator == null && firstNum == null) {
            firstNum = e.target.textContent;
            result.textContent = firstNum;
        } else if (operator == null && firstNum !== null) {
            firstNum = firstNum + e.target.textContent;
            result.textContent = firstNum;
        } else if (operator !== null && secondNum == null) {
            secondNum = e.target.textContent;
            result.textContent = secondNum;
        } else if (operator !== null && secondNum !== null) {
            secondNum = secondNum + e.target.textContent;
            result.textContent = secondNum;  
        }
    });
});

operators.forEach(function (i) {
    // nums.forEach(function (i) {
    //     i.removeEventListener('click', (e) =>{
    //     });
    // });
    // nums.forEach(function (i) {
    //     i.addEventListener('click', (e) => {
    //         if (secondNum == null) {
    //             secondNum = e.target.textContent;
    //             result.textContent = secondNum;
    //         } else {
    //             secondNum = secondNum + e.target.textContent;
    //             result.textContent = secondNum;
    //         }
    //     });
    // });
    i.addEventListener('click', (e) => {
        if (e.target.textContent == '÷') {
            operator = '/';

        } else if (e.target.textContent == '+') {
            operator = '+';
        } else if (e.target.textContent == '×') {
            operator = '*'
        } else if (e.target.textContent == '-') {
            operator = '-'
        } else {
            operator = '='
        }
    });
})




