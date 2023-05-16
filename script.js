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
// pointBtn.addEventListener('click', appendNumber(point.textContent));
equalBtn.addEventListener('click', result);
plusMinusBtn.addEventListener('click', plusMinus);
percentagesBtn.addEventListener('click', percentage);
numberBtn.forEach((button) => button.addEventListener('click', () => appendNumber(button.textContent))
)

operatorBtn.forEach((button) => button.addEventListener('click', () => appendOperator(button.textContent))
)

//variables

let firstNumber;
let operator;
let secondNumber;

//display function

function appendNumber(a) {
    if (displayScreen.textContent === '0') {displayScreen.textContent = a
    }else{
        displayScreen.textContent += a
  }}

function appendOperator(a) {
if (displayScreen.textContent === '0') {displayScreen.textContent = a
}else{
    displayScreen.textContent += a
}}

function clearAll(){
    console.log('clear')
}

function result(){
    console.log('result')
}

function plusMinus(){
    console.log('plusMinus')
}