const form = document.getElementById('string_comparator-form');
const output = document.getElementById('output');

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const x = form.elements['x'].value;
      const y = form.elements['y'].value;

      // Send AJAX request to server
      const xhr = new XMLHttpRequest();
      xhr.open('POST', '/string_comparator');
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.onload = () => {
        if (xhr.status === 200) {
          const result = xhr.responseText;
          output.textContent = result;
          localStorage.setItem('stringComparatorResult', result); // Store the result in Local Storage
        } else {
          output.textContent = 'Error: ' + xhr.status;
        }
      };
      xhr.send(JSON.stringify({ x, y }));
    });

    // STRING COMPARATOR FUNCTION
    function string_comparator() {
      const x = document.getElementById("x").value;
      const y = document.getElementById("y").value;

      let result;

      // CHECK STRINGS
      if(x === y) {
        result = "As strings são iguais!";
      } else if(x !== y){
        result = "As strings são diferentes!";
      } else {
        result = "As strings não podem ser comparadas!";
      }

      document.getElementById("result").innerHTML = result;
    }

    function goToMenu() {
      window.location.href = "menu.html";
    }