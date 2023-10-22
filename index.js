document.getElementById("sBtn").addEventListener("click", function () {

    var inputElement = document.getElementById("inputString");
    var inputString = inputElement.value;

    var reversedString = reverseString(inputString);

    var outputElement = document.getElementById("output");
    outputElement.textContent = "Reversed string: " + reversedString;
});

function reverseString(inputString) {
    var reversedString = '';
    for (var i = inputString.length - 1; i >= 0; i--) {
        reversedString += inputString[i];
    }
    return reversedString;
}








document.getElementById("checkBtn").addEventListener("click", function () {

    var inputElement = document.getElementById("inputNumbers");
    var inputNumbers = inputElement.value;

    var isPalindrome = checkPalindrome(inputNumbers);

    var outputElement = document.getElementById("palindromeOutput");
    if (isPalindrome) {
        outputElement.textContent = "It's a palindrome!";
    } else {
        outputElement.textContent = "It's not a palindrome.";
    }
});


function checkPalindrome(input) {
    input = input.replace(/\s/g, '').toLowerCase();
    
    var length = input.length;
    for (var i = 0; i < length / 2; i++) {
        if (input[i] !== input[length - 1 - i]) {
            return false;
        }
    }
    return true; 
}









document.getElementById("calculateBtn").addEventListener("click", function () {
    var subtotalElement = document.getElementById("subtotal");
    var tipPercentageElement = document.getElementById("tipPercentage");
    
    var subtotal = parseFloat(subtotalElement.value);
    var tipPercentage = parseFloat(tipPercentageElement.value);

    var totalAmount = calculateTotalAmount(subtotal, tipPercentage);

    var totalAmountElement = document.getElementById("totalAmount");
    totalAmountElement.textContent = "Total Amount (including " + tipPercentage + "% tip): $" + totalAmount.toFixed(2);
});

function calculateTotalAmount(subtotal, tipPercentage) {

    var tipAmount = (subtotal * tipPercentage) / 100;

    var totalAmount = subtotal + tipAmount;
    return totalAmount;
}



