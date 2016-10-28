
var clearOnIns = false;
var numbersInserted = [];
var operators = [];

function newDigit(digit) {
    var screen = document.getElementById('answer').innerHTML;
    if (screen === '0') screen = '';
    if (clearOnIns) {
        screen = '';
        clearOnIns = false;
    }
    document.getElementById('answer').innerHTML = screen + digit;
}

function newDot() {
    var screen = document.getElementById('answer').innerHTML;
    if (screen.indexOf('.') === -1) {
        document.getElementById('answer').innerHTML = screen + '.';
    }
}

function backspace() {
    var screen = document.getElementById('answer').innerHTML;
    screen = screen.slice(0, -1);
    if (screen.length < 1) screen = '0';
    document.getElementById('answer').innerHTML=screen;
}

function clearAll() {
    document.getElementById('answer').innerHTML = '0';
    document.getElementById('history').innerHTML = '';
}

function clearScreen() {
    var screen = document.getElementById('answer').innerHTML;
    document.getElementById('answer').innerHTML = '0';
}

function operator(op) {
    var screen = document.getElementById('answer').innerHTML;
    //update active numbers
    numbersInserted.push(parseFloat(screen));
    operators.push(op);
    //update history
    var history = document.getElementById('history').innerHTML;
    var expression = history.trim() + screen + op;
    document.getElementById('history').innerHTML = expression;
    clearOnIns = true;
    //update total


}

function total() {
    //todo
}

function convertNumbersOperators() {
    for (n = 0; n < operators.length; n++) {
        //todo
    }
}