function homeButton() {
  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("homeButton").addEventListener("click", function () {
      window.location.href = "../index.html";
    });
  });
}

function convert() {
  document.getElementById("convertButton").addEventListener("click", function () {
    const input = document.getElementById("fahrenheit").value;
    console.log(input);
    const output = document.getElementById("celsius");
    const celsius = (input - 32) * (5 / 9);
    console.log(celsius);
    output.value = celsius + "°C";
  });
}

homeButton();
