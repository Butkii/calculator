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
    if (op == "1") {
        console.log(num1 + " + " + num2 + " = " + add(num1, num2));
    }
    else if (op == "2") {
        console.log(num1 + " - " + num2 + " = " + subtract(num1, num2));
    }
    else if (op == "3") {
        console.log(num1 + " * " + num2 + " = " + multiply(num2, num2));
    }
    else if (op == "4") {
        console.log(num1 + " / " + num2 + " = " + divide(num1, num2));
    }
    else {
        console.log("invalid input");
    }
}


// let num1 = parseInt(prompt('Enter number 1'));
// let num2 = parseInt(prompt('Enter number 2'));
// let operator = prompt('Enter 1 for +, 2 for -, 3 for *, 4 for /');
// operate(num1, num2, operator);