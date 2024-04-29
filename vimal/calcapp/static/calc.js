let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = evalExpression(display.value);
    } catch(error) {
        display.value = 'Error';
    }
}

function evalExpression(expression) {
    return Function('"use strict";return (' + expression + ')')();
}