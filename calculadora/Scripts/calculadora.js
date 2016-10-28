
var clearOnIns = false;
var numbersInserted = [0];
var operators = ["+"];

function GetChar(event) {
    var chCode = ('charCode' in event) ? event.charCode : event.keyCode;
    alert("The Unicode character code is: " + chCode);
}

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
        if (clearOnIns) {
            screen = '';
            clearOnIns = false;
            document.getElementById('answer').innerHTML = screen + '0.';
        } else document.getElementById('answer').innerHTML = screen + '.';
    }
}

function backspace() {
    var screen = document.getElementById('answer').innerHTML;
    screen = screen.slice(0, -1);
    if (!Number.isFinite(parseFloat(screen))) screen = '0';
    if (screen.length < 1) screen = '0';
    document.getElementById('answer').innerHTML=screen;
}

function clearAll() {
    document.getElementById('answer').innerHTML = '0';
    document.getElementById('history').innerHTML = '';
    numbersInserted = [0];
    operators = ["+"];
}

function clearScreen() {
    var screen = document.getElementById('answer').innerHTML;
    document.getElementById('answer').innerHTML = '0';
}

function operator(op) {
    var screen = document.getElementById('answer').innerHTML;
    numbersInserted.push(parseFloat(screen));
    operators.push(op);
    var history = document.getElementById('history').innerHTML;
    var expression = history + screen + op;
    document.getElementById('history').innerHTML = expression;
    clearOnIns = true;
    convertNumbersOperators();
}

function total() {
    var screen = document.getElementById('answer').innerHTML;
    numbersInserted.push(parseFloat(screen));
    convertNumbersOperators();
    document.getElementById('history').innerHTML = "";
    clearOnIns = true;
    numbersInserted = [0];
    operators = ["+"];
}

function convertNumbersOperators() {
    var operatorsChange = {
        '+': function (a, b) { return a + b },
        '-': function (a, b) { return a - b },
        '÷': function (a, b) { return a / b },
        'x': function (a, b) { return a * b }
    };
    var total = 0;
    total = operatorsChange[operators[0]](numbersInserted[0], numbersInserted[1]);
    document.getElementById('answer').innerHTML = total;
    if (Number.isFinite(total)) {
        numbersInserted = [total];
        operators = [operators[1]];        
    } else {
        document.getElementById('history').innerHTML = "";
        clearOnIns = true;
        numbersInserted = [0];
        operators = ["+"];
    }
}