function convertTemperature() {
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitSpan = document.getElementById('fahrenheit');
    
    if (celsiusInput.value === '') {
        alert('Please enter a temperature in Celsius');
        return;
    }

    const celsius = parseFloat(celsiusInput.value);
    const fahrenheit = (celsius * 9/5) + 32;
    
    fahrenheitSpan.textContent = fahrenheit.toFixed(2);
}

// Also allow conversion when Enter key is pressed
document.getElementById('celsius').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        convertTemperature();
    }
});