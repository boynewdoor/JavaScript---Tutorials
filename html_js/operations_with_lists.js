const form = document.getElementById('operations_with_list-form');
const listContent = document.getElementById('listContent');
const operationInput = document.getElementById('operationInput');
const resultList = document.getElementById('resultList');

let list = ["apple", "banana", "orange"];
listContent.textContent = list.join(', ');

function modifyList() {
    const selectedOperation = operationInput.value;
    if (selectedOperation === 'add') {
        const listInput = prompt('Enter the element to add:');
        list.push(listInput);
    } else if (selectedOperation === 'delete') {
        const listInput = prompt('Enter the element to delete:');
        const index = list.indexOf(listInput);
        if (index > -1) {
            list.splice(index, 1);
        } else {
            alert('The element is not in the list');
        }
    } else if (selectedOperation === 'clean') {
        list.length = 0;
    } else if (selectedOperation === 'search') {
        const listInput = prompt('Enter the element to search:');
        let found = false;
        for (let i = 0; i < list.length; i++) {
            if (list[i] == listInput) {
                found = true;
                break;
            }
        }
        if (found) {
            alert('The element is in the list');
        } else {
            alert('The element is not in the list or the list is empty');
        }
    }

    // Update the result list
    resultList.innerHTML = '';
    const ul = document.createElement('ul');
    for (let i = 0; i < list.length; i++) {
        const li = document.createElement('li');
        li.textContent = list[i];
        ul.appendChild(li);
    }
    resultList.appendChild(ul);

    // Update the list content
    listContent.textContent = list.join(', ');

    localStorage.setItem('operationsWithListsResult', list); // Store the result in Local Storage
}

function goToMenu() {
    window.location.href = "menu.html";
}