const calculateTemp = () => {
    const Tempinput = document.getElementById('temp').value;

    const tempSelecte = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelecte.selectedIndex].value;

    // Celsius to Fahrenheit
    const ctof = (cel) => {
        let fahrenheit = ((cel * 9 / 5) + 32).toFixed(1);
        return fahrenheit;
    }

    // Fahrenheit to Celsius
    const ftoc = (fah) => {
        let celsius = ((fah - 32) * 5 / 9).toFixed(1);
        return celsius;
    }

    if (valueTemp == 'cel') {
        document.getElementById("result").innerHTML = ctof(Tempinput) + "&#176; Fahrenheit";
    }
    else {
        document.getElementById("result").innerHTML = ftoc(Tempinput) + "&#176; Celsius";
    }
}
