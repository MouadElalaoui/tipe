// script.js

function calculateAngle(v0) {
    var userInput = parseFloat(document.getElementById("userInput").value);

    if (isNaN(userInput)) {
        alert("Please enter a valid number.");
        return;
    }

    var g = 9.8;
    var result = Math.asin((g * userInput) / Math.pow(v0, 2)) / 2;
    var res = result * (180 / Math.PI); // Convert radians to degrees

    document.getElementById("output").innerHTML = "Result: " + result.toFixed(2) + " rad";
    document.getElementById("output2").innerHTML = "Result: " + res.toFixed(2) + " deg";
}
