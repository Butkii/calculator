function add(a, b) {
	return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

function operate(num1, num2, op) {
    if (op == "+") {
        return (num1 + num2);
    }
    else if (op == "-") {
        return (num1 - num2);
    }
    else if (op == "x") {
        return (num1 * num2);
    }
    else if (op == "/") {
        return (num1 / num2);
    }
    else if (op == "%") {
        return (num1 % num2);
    }
    else {
        return ("NaN");
    }
}

let displayText = "";
let num1, num2, userop, result, operationCompleted;
const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.oper');

let solution = document.getElementById('solution');
let previousOp = document.getElementById('previous-op');
solution.innerHTML = "";
previousOp.innerHTML = "";
operationCompleted = false;

digits.forEach(digit => digit.addEventListener('click', function(e) {
    console.log(e.target.innerHTML);
    if (operationCompleted === true) {
        previousOp.innerHTML = result;
        solution.innerHTML = "";
        operationCompleted = false;
    }
    displayText = displayText + e.target.innerHTML;
    solution.innerHTML = displayText;
}));

operators.forEach(operator => operator.addEventListener('click', function(e) {
    console.log(e.target.innerHTML);
    if (e.target.innerHTML == "=") {
        num2 = parseInt(displayText);
        previousOp.innerHTML += num2;
        displayText = "";
        result = operate(num1, num2, userop);
        solution.innerHTML = result;
        operationCompleted = true;
    }
    else {
        num1 = parseInt(displayText);
        userop = e.target.innerHTML;
        if (previousOp.innerHTML == result) {
            previousOp.innerHTML = (solution.innerHTML + userop);
        }
        else {
            previousOp.innerHTML += (solution.innerHTML + userop);
        }
        if (operationCompleted === true) {
            previousOp.innerHTML = result + userop;
            num1 = result;
            operationCompleted = false;
        }        
        displayText = "";
        solution.innerHTML = "0";
    }
    
}));



// let num1 = parseInt(prompt('Enter number 1'));
// let num2 = parseInt(prompt('Enter number 2'));
// let operator = prompt('Enter 1 for +, 2 for -, 3 for *, 4 for /');
// operate(num1, num2, operator);