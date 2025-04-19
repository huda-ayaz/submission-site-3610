document.addEventListener("DOMContentLoaded", () => {
  const homeBtn = document.getElementById("homeButton");
  const form = document.getElementById("tempForm");
  const toCelsiusRb = document.querySelector('input[value="toCelsius"]');
  const toFahrRb = document.querySelector('input[value="toFahrenheit"]');
  const inputLabel = document.getElementById("inputLabel");
  const tempInput = document.getElementById("tempInput");
  const convertBtn = document.getElementById("convertButton");
  const resultOutput = document.getElementById("result");

  homeBtn.addEventListener("click", () => {
    window.location.href = "../index.html";
  });

  function updateFormUI() {
    if (toCelsiusRb.checked) {
      inputLabel.textContent = "Degrees in Fahrenheit";
      tempInput.placeholder  = "Enter Fahrenheit";
      convertBtn.textContent = "Convert to Celsius";
    } else {
      inputLabel.textContent = "Degrees in Celsius";
      tempInput.placeholder  = "Enter Celsius";
      convertBtn.textContent = "Convert to Fahrenheit";
    }
    resultOutput.textContent = "";
  }
  toCelsiusRb.addEventListener("change", updateFormUI);
  toFahrRb.addEventListener("change", updateFormUI);
  updateFormUI();

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const val = parseFloat(tempInput.value);

    let converted;
    if (toCelsiusRb.checked) {
      converted = ((val - 32) * 5/9).toFixed(2) + " °C";
    } else {
      converted = ((val * 9/5) + 32).toFixed(2) + " °F";
    }
    resultOutput.textContent = converted;
  });
});
