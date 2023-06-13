const form = document.getElementById('number_comparator-form');
    const output = document.getElementById('output');

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const x = form.elements['x'].value;
      const y = form.elements['y'].value;

      // Send AJAX request to server
      const xhr = new XMLHttpRequest();
      xhr.open('POST', '/number_comparator');
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.onload = () => {
        if (xhr.status === 200) {
          const result = xhr.responseText;
          output.textContent = result;
          localStorage.setItem('numberComparatorResult', result); // Store the result in Local Storage
        } else {
          output.textContent = 'Error: ' + xhr.status;
        }
      };
      xhr.send(JSON.stringify({ x, y }));
    });

    // NUMBER COMPARATOR FUNCTION
    function number_comparator() {
      const x = parseInt(document.getElementById("x").value);
      const y = parseInt(document.getElementById("y").value);

      let result;

      // CHECK STRINGS
      if(x === y) {
        result = "Os números são iguais!";
      } else if( x >= y) {
        result = 'X é maior que Y!';
      } else if (x <= y){
        result = 'X é menor que Y!';
      } else {
        result = "As strings não podem ser comparadas!";
      }

      document.getElementById("result").innerHTML = result;
    }

    function goToMenu() {
      window.location.href = "menu.html";
    }