let firstNum;
let secondNum;
let operator;
let oldOp;


const add = function (a, b) {
    return Number((a+b).toFixed(5));
};

const multiply = function (a, b) {
    return Number((a*b).toFixed(5));
};

const subtract = function (a, b) {
    return Number((a-b).toFixed(5));
}

const divide = function (a, b) {
    return Number((a/b).toFixed(5));
}

const operate = function (operator) {
    if (operator === '+') return add (Number(firstNum), Number(secondNum));
    if (operator === '-') return subtract (Number(firstNum), Number(secondNum));
    if (operator === '×') return multiply (Number(firstNum), Number(secondNum));
    if (operator === '÷') return divide (Number(firstNum), Number(secondNum));
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
            if (firstNum === '.') {
                firstNum = '0.'
            }
            result.textContent = firstNum;
        } else if (!operator && firstNum) {
            if (e.target.textContent === '.') {
                if (Array.from(firstNum).includes ('.')) {
                    return;
                } 
            }
            firstNum = firstNum + e.target.textContent;
            result.textContent = firstNum;
        } else if (operator  && !secondNum) {
            resultTop.textContent = firstNum + operator
            secondNum = e.target.textContent;
            if (secondNum === '.') {
                secondNum = '0.'
            }
            result.textContent = secondNum;
        } else {
            secondNum = secondNum + e.target.textContent;
            result.textContent = secondNum;  
        }   
    });
});

const divisionByZero = function () {
        alert('ERROR. You cannot divide by 0');
        firstNum = null;
        secondNum = null;
        resultTop.textContent = null;
        result.textContent = 0;
        operator = null;
}

operators.forEach(function (i) {
    i.addEventListener('click', (e) => {
        if (e.target.textContent === 'CLEAR') {
            firstNum = null;
            secondNum = null;
            resultTop.textContent = null;
            result.textContent = '0';
            operator = null;
        } else if (!firstNum) {
            return;
        } else if (e.target.textContent === 'DELETE') {
            if (!secondNum) {
                firstNum = Array.from(firstNum);
                firstNum.pop();
                firstNum = firstNum.join('');
                result.textContent = firstNum;
            } else {
                secondNum = Array.from(secondNum);
                secondNum.pop();
                secondNum = secondNum.join('');
                result.textContent = secondNum;
            }
        } else {
            if (!secondNum) {
                operator = e.target.textContent
                resultTop.textContent = firstNum + operator;
            } else {
                if (operator === '÷' && secondNum === '0') {
                    divisionByZero();
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
    
        }
    });
})

