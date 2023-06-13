const form = document.getElementById('character_counter-form');
    const output = document.getElementById('output');

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const x = form.elements['x'].value;
      const y = form.elements['y'].value;

      // Send AJAX request to server
      const xhr = new XMLHttpRequest();
      xhr.open('POST', '/character_counter');
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.onload = () => {
        if (xhr.status === 200) {
          const result = xhr.responseText;
          output.textContent = result;
          localStorage.setItem('characterCounterResult', result); // Store the result in Local Storage
        } else {
          output.textContent = 'Error: ' + xhr.status;
        }
      };
      xhr.send(JSON.stringify({ x, y }));
    });

    // CHARACTER COUNTER FUNCTION
    function character_counter() {
      const x = document.getElementById("x").value;
      const y = document.getElementById("y").value;

      let result;

      result = y.split(x).length - 1;

      document.getElementById("result").innerHTML = result;
    }

    function goToMenu() {
      window.location.href = "menu.html";
    }