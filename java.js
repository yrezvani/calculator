let firstNum;
let secondNum;
let operator;
let currentTotal;
let oldOp;


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
    if (operator === '×') return multiply (Number(firstNum), Number(secondNum));
    if (operator === '÷') return divide (Number(firstNum), Number(secondNum));
    // firstNum;
    // secondNum;
    // reset = true;
}

const nums = document.querySelectorAll('.numbers');
const result = document.querySelector('#result-bottom');
result.textContent = 0
const resultTop = document.querySelector('#result-top');
const operators = document.querySelectorAll('.operators');

nums.forEach(function (i) {
    i.addEventListener('click', (e) => {
        if (!operator && !firstNum) {
            firstNum = e.target.textContent;
            result.textContent = firstNum;
        } else if (!operator && firstNum) {
            firstNum = firstNum + e.target.textContent;
            result.textContent = firstNum;
        } else if (operator  && !secondNum) {
            resultTop.textContent = firstNum + operator
            secondNum = e.target.textContent;
            result.textContent = secondNum;
        } else {
            secondNum = secondNum + e.target.textContent;
            result.textContent = secondNum;  
        }
    });
});

operators.forEach(function (i) {
    i.addEventListener('click', (e) => {
        if (e.target.textContent === 'clear') {
            firstNum = null;
            secondNum = null;
            resultTop.textContent = null;
            result.textContent = '0';
            operator = null;
        } else {
            if (!secondNum) {
                operator = e.target.textContent
                resultTop.textContent = firstNum + operator;
            } else {
                result.textContent = operate (operator);
                oldOp = operator;
                operator = e.target.textContent;
                if (operator == '=') {
                    resultTop.textContent = firstNum + oldOp + secondNum + '=';
                    firstNum = result.textContent
                    secondNum = null;
                } else {
                    resultTop.textContent = result.textContent + operator;
                    firstNum = result.textContent
                    secondNum = null;
                }
            }
    
        }
    });
})




