//buttons and display

const clearBtn = document.getElementsByClassName('clear');
const pointBtn = document.getElementsByClassName('point');
const equalBtn = document.getElementsByClassName('equal');
const plusMinusBtn = document.getElementsByClassName('plus-minus');
const percentagesBtn = document.getElementsByClassName('percentages');

const numberBtn = document.querySelectorAll('[data-number]');
const operatorBtn = document.querySelectorAll('[data-operator]');
const display = document.getElementsByClassName('display');

//functions

const add = function(a,b) {return a + b};
const subtract = function(a,b) {return a - b};
const multiply = function(a,b) {return a * b};
const divide = function(a,b) {return a / b};
const percentage = function(a) {return a/100};