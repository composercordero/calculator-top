//variables

let firstNumber;
let operator;
let secondNumber;
let currentOperation = null
let shouldResetScreen = false

//buttons and display

const clearBtn = document.getElementById('clear');
const pointBtn = document.getElementById('point');
const equalBtn = document.getElementById('equal');
const plusMinusBtn = document.getElementById('plus-minus');
const percentagesBtn = document.getElementById('percentages');

const numberBtn = document.querySelectorAll('[data-number]');
const operatorBtn = document.querySelectorAll('[data-operator]');
let displayScreen = document.getElementById('display');

//operator function

const add = function(a,b) {return a + b};
const subtract = function(a,b) {return a - b};
const multiply = function(a,b) {return a * b};
const divide = function(a,b) {return a / b};
const percentage = function(a) {return a/100};

//Actions
clearBtn.addEventListener('click', clearAll);
pointBtn.addEventListener('click', appendPoint(point.textContent));
equalBtn.addEventListener('click', evaluate);
plusMinusBtn.addEventListener('click', plusMinus);
percentagesBtn.addEventListener('click', percentage);
numberBtn.forEach((button) => button.addEventListener('click', () => appendNumber(button.textContent)))
operatorBtn.forEach((button) => button.addEventListener('click', () => setOperation(button.textContent, button.className += ' highlight')))

//display function

function appendNumber(a) {
    if (displayScreen.textContent === '0' || shouldResetScreen)
    resetScreen() 
    displayScreen.textContent += a
  }

function appendPoint(a) {
}

function resetScreen() {
    displayScreen.textContent = ''
    shouldResetScreen = false
  }

function setOperation (operator){
    if (currentOperation !== null) evaluate()
    firstNumber = displayScreen.textContent;
    currentOperation = operator
    let firstHalf = `${firstNumber} ${currentOperation}`;
    shouldResetScreen = true
}

function evaluate(){
    if (currentOperation === null || shouldResetScreen) return
    secondNumber = displayScreen.textContent
    displayScreen.textContent = operate(currentOperation, firstNumber, secondNumber);
}

function operate (operator, a, b){
    a = Number(a)
    b = Number(b)

    switch(operator) {
        case '+': return add(a,b)
        case '-': return subtract(a,b)
        case 'x': return multiply(a,b)
        case '/': return divide(a,b)
        default:
            return null
    }
}


function clearAll(){
    console.log('clear')
}

function plusMinus(){
    console.log('plusMinus')
}