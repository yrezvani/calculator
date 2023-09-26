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
const scrnTxt = document.querySelector('#screen-text');


nums.forEach(function (i) {
    i.addEventListener('click', (e) => {
        if (firstNum == null) {
            firstNum = e.target.textContent;
            scrnTxt.textContent = firstNum;
        } else {
            firstNum = firstNum + e.target.textContent;
            scrnTxt.textContent = firstNum;
        }
    });
});




//     addEventListener ("click", (e) => {
//     console.log(e.target);
// })
    // if (firstNum == null) {
    //     firstNum = e.target.textContent;
    // } else {
    //     firstNum = firstNum + e.target.textContent;
    // }
// })

// const button7 = document.querySelector('#seven');
// seven.addEventListener ('click', () => {
//     if (firstNum == null) {
//         firstNum = button7.textContent;
//     } else {
//         firstNum = firstNum + '7'
//     }
// })

    //     if (firstNum = null) {
//         firstNum = buttons.textContent;
//     } else {
//         firstNum = firstNum + buttons.textContent;
//     }
// })
