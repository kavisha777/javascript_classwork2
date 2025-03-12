function calculate(operation) {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let resultElement = document.getElementById("output");

    if (isNaN(num1) || isNaN(num2)) {
        resultElement.textContent = "Please enter valid numbers!";
        resultElement.style.color = "red";
        return;
    }

    let result;

    if (operation === "add") {
        result = num1 + num2;
    } else if (operation === "subtract") {
        result = num1 - num2;
    } else if (operation === "multiply") { // Corrected spelling
        result = num1 * num2;
    } else if (operation === "divide") {
        if (num2 === 0) {
            resultElement.textContent = "Cannot divide by JavaScript Classwork 02 zero!";
            resultElement.style.color = "red";
            return;
        }
        result = num1 / num2;
    } else {
        resultElement.textContent = "Invalid operation!";
        resultElement.style.color = "red";
        return;
    }

    resultElement.textContent = "Result: " + result;
    resultElement.style.color = "green";
}