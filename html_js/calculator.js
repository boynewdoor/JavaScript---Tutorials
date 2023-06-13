//calculator functions
const form = document.getElementById('calculator-form');
const output = document.getElementById('output');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const x = form.elements['x'].value;
  const y = form.elements['y'].value;
  const operation = form.elements['operation'].value;

  // Send AJAX request to server
  const xhr = new XMLHttpRequest();
  xhr.open('POST', '/calculator');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = () => {
    if (xhr.status === 200) {
      const result = xhr.responseText;
      output.textContent = result;
      localStorage.setItem('calculatorResult', result); // Store the result in Local Storage
    } else {
      output.textContent = 'Error: ' + xhr.status;
    }
  };
  xhr.send(JSON.stringify({ x, y, operation }));
});

function calculate() {
    const x = parseInt(document.getElementById("x").value);
    const y = parseInt(document.getElementById("y").value);
    const op = document.getElementById("operation").value;

    let result;
    switch (op) {
        case "add":
        result = x + y;
        break;
        case "subtract":
        result = x - y;
        break;
        case "multiply":
        result = x * y;
        break;
        case "divide":
        result = x / y;
        break;
        default:
        result = "Invalid operator";
    }

    document.getElementById("result").innerHTML = result;
    }

function goToMenu() {
  window.location.href = "menu.html";
}