//MATH OPERATIONS
function add(a, b) {
	return (a + b);
};

function subtract(a, b) {
    return (a - b);
};

function multiply(a, b) {
    return (a * b);
};

function divide(a, b) {
    if (b == 0) {
        return "NaN";
    }
    else {
        return (a / b);
    }
};

function power(a, b) {
    return (Math.pow(a,b)).toFixed(7);
};

function operate(num1, num2, op) {
    console.log(num1 + op + num2);
    if (op == "+") {
        return add(num1, num2);
    }
    else if (op == "-") {
        return subtract(num1, num2);
    }
    else if (op == "x") {
        return multiply(num1, num2);
    }
    else if (op == "/") {
        return divide(num1, num2);
    }
    else if (op == "^") {
        return power(num1, num2);
    }
    else {
        return ("NaN");
    }
}

//query selectors
const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.oper');
const clear = document.querySelectorAll('.clear');
const signs = document.querySelector('.signs');
const decimal = document.querySelector('.decimal');
let currentOp = document.getElementById('current-op');
let previousOp = document.getElementById('previous-op');

//variables to store all data
let currentText = "";
let num1, num2, userop, result, numberOfOperators, completedOperation;
let negativeSign, decimalFlag;

//clearing out everything
currentOp.innerHTML = "";
previousOp.innerHTML = "";
numberOfOperators = 0;
completedOperation = false;
negativeSign = false;
decimalFlag = false;

//digit logic
digits.forEach(digit => digit.addEventListener('click', function(e) {
    console.log(e.target.innerHTML);
    if (completedOperation == true) {
        console.log('were here');
        previousOp.innerHTML = "";
        num1 = 0;
        num2 = 0;
        userop = "";
        numberOfOperators = 0;
        completedOperation = false;
        currentText = e.target.innerHTML;
    }
    else {
        currentText += e.target.innerHTML;
    }
    currentOp.innerHTML = currentText;
}));

//operation logic
operators.forEach(operator => operator.addEventListener('click', function(e) {
    console.log(e.target.innerHTML);
    if (e.target.innerHTML == "=") {
        num2 = parseInt(currentText);
        previousOp.innerHTML += num2;
        result = operate(num1, num2, userop);
        currentText = "";
        currentOp.innerHTML = result;
        numberOfOperators = 0;
        num1 = result;
        num2 = 0;
        completedOperation = true;
    }
    else if (completedOperation == true) {
        userop = e.target.innerHTML;
        previousOp.innerHTML += userop;
        completedOperation = false;
    }
    else 
    {
        if (numberOfOperators == 0) {
            num1 = parseFloat(currentText);
            userop = e.target.innerHTML;
            previousOp.innerHTML += (num1 + userop);
            currentText = "";
        }
        else {
            num2 = parseFloat(currentText);
            result = operate(num1, num2, userop);
            currentOp.innerHTML = result;
            userop = e.target.innerHTML;
            previousOp.innerHTML += (num2 + userop);
            num1 = result;
            num2 = 0;
            currentText = "";
        }       
        numberOfOperators += 1;
    }
}));

//clear out logic 
clear.forEach(button => button.addEventListener('click', function(e) {
    console.log(e.target.innerHTML);
    if (e.target.innerHTML == "AC") {
        currentText = "";
        num1 = 0;
        num2 = 0;
        userop = "";
        result = 0;
        numberOfOperators = 0; 
        completedOperation = false;
        previousOp.innerHTML = "";
        currentOp.innerHTML = "";
        decimalFlag = false;
        negativeSign = false;
    }
    else {
        if (currentText.charAt(currentText.length - 1) == ".") {
            decimalFlag = false;
        }
        if (currentText.charAt(currentText.length - 1) == "-") {
            negativeSign = false;
        }
        currentText = currentText.slice(0,-1);
        currentOp.innerHTML = currentText;
    }
}));

//negattive positive sign logic
signs.addEventListener('click', function(e) {
    console.log(e.target.innerHTML);
    if (negativeSign) {
        negativeSign = false;
        currentText = currentText.substring(1);
        currentOp.innerHTML = currentText;
        console.log(currentText);
    }
    else {
        currentText = "-" + currentText;
        currentOp.innerHTML = currentText;
        negativeSign = true;
    }
});

//negattive positive sign logic
decimal.addEventListener('click', function(e) {
    console.log(e.target.innerHTML);
    if (decimalFlag == false) {
        currentText += ".";
        currentOp.innerHTML = currentText;
        decimalFlag = true;
    }
});
