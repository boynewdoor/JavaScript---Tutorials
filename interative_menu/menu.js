// FOR INPUT PURPOSES
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

  // NUMBER COMPARATOR FUNCTION
  function number_comparator() {
    readline.question("Digite o seu número 1: ", (x) => {
        readline.question("Digite o seu número 2: ", (y) => {
            // CHECK NUMBERS
            if(x === y) {
                console.log('\nOs números são iguais!');
            } else if(x >= y) {
                console.log('\nX é maior que Y!');
            } else if(x <= y) {
                console.log('\nX é menor que Y!');
            } else {
                console.log('\nImpossível de comparar!');
            }

            mainMenu(); // SHOW MENU AGAIN
        });
    });
  }

  // CHARACTER COUNTER FUNCTION
  function character_counter() {
    readline.question("Digite o seu caracter: ", (x) => {
        readline.question("Digite a sua string: ", (y) => {
            console.log('O caracter aparece: ', y.split(x).length-1);

            mainMenu(); // SHOW MENU AGAIN
        });
    });
  }

  // STRING COMPARATOR FUNCTION
  function string_comparator() {
    readline.question("Digite a sua palavra 1: ", (x) => {
        readline.question("Digite a sua palavra 2: ", (y) => {
            // CHECK STRINGS
            if(x === y) {
                console.log('\nAs strings são iguais!');
            } else if(x !== y){
                console.log('\nAs strings são diferentes!')
            } else {
                console.log('\nAs strings não podem ser comparadas!')
            }
            mainMenu(); // SHOW MENU AGAIN
        }); 
    });
  }

  // CALCULATOR FUNCTION
  function calculator() {

      readline.question("Inserir o valor de x: ", (x) => {
        readline.question("Inserir o valor de y: ", (y) => {
    
          console.log('\n1: +', '\n2: -', '\n3: *', '\n4: /');
          
          // SWITCH CASE TO CHECK OPTION SELECTED
          readline.question("\nChoose an option please (1-4): ", (input) => {
            switch(input) {
              case '1':
                console.log(parseInt(x) + parseInt(y));
                break;
              case '2':
                console.log(parseInt(x) - parseInt(y));
                break;
              case '3':
                console.log(parseInt(x) * parseInt(y));
                break;
              case '4':
                console.log(parseInt(x) / parseInt(y));
                break;
              default:
                console.log('\nMá escolha de opção!\n');
            }
            
            mainMenu(); // SHOW MENU AGAIN
          });
        });
      });
  }
  
  // INTERATIVE MENU FUNCTION
  function mainMenu() {
    readline.question(`
      Welcome to My Menu!
  
      What would you like to do?
  
      1. Calculator
      2. String Comparator
      3. Character Counter
      4. Number Comparator
      5. Quit
  
      Please enter your choice (1-5): `, (choice) => {
      switch(choice) {
        case '1':
          console.log('\nYou choose use the calculator.\n');
          calculator();
          break;
        case '2':
          console.log('\nYou choose to use the string comparator.\n');
          string_comparator();
          break;
        case '3':
          console.log('\nYou choose to use the character counter.\n');
          character_counter();
          break;
        case '4':
          console.log('\nYou choose to use the number comparator.\n');
          number_comparator();
          break;
        case '5':
          console.log('\nThank you for using the Menu!\n');
          readline.close();
          return;
        default:
          console.log('\nInvalid choice. Please try again.\n');
      }
      mainMenu(); // SHOW MENU AGAIN
    });
  }
  
  mainMenu(); // CALL MENU