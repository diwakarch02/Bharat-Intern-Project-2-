// script.js
function convertToCelsius() {
    const celsius = parseFloat(document.getElementById("celsius").value);
    if (!isNaN(celsius)) {
        const fahrenheit = (celsius * 9/5) + 32;
        document.getElementById("result1").textContent = `${celsius}°C is ${fahrenheit.toFixed(2)}°F`;
    } else {
        document.getElementById("result1").textContent = "Please enter a valid number.";
    }
}

function convertToFahrenheit() {
    const fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
    if (!isNaN(fahrenheit)) {
        const celsius = (fahrenheit - 32) * 5/9;
        document.getElementById("result2").textContent = `${fahrenheit}°F is ${celsius.toFixed(2)}°C`;
    } else {
        document.getElementById("result2").textContent = "Please enter a valid number.";
    }
}
