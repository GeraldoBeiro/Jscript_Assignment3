/*Georgian College
24F Client-Side JavaScript - 200
Assignment - 03
Student: Geraldo Beiro
Student ID: 200587023
*/


//I am getting the element by the id=todoForm, which is in the <form> element
document.getElementById('todoForm').addEventListener('submit', (event) => {
    event.preventDefault(); // this prevents the page from refreshing

    const inputField = document.getElementById('addToList'); // creating a constant for the event
    const inputValue = inputField.value; // Trim whitespace before and after statement

    if (inputValue === '') {
        alert('Please enter a to-do item!');
        return;
    }

    inputField.value = ''; // clearing the input field

    // Now creating a new to-do item container
    const todoItem = document.createElement('div');
    todoItem.className = 'todo-item';

    // create a checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    // create a label with the input value
    const label = document.createElement('label');
    label.textContent = inputValue;

    // create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-button';

    // append checkbox, label, and delete button to the container
    todoItem.appendChild(checkbox);
    todoItem.appendChild(label);
    todoItem.appendChild(deleteButton);

    // Append the new to-do item to the list
    document.getElementById('todoList').appendChild(todoItem);

    // Add event listener for the checkbox to mark as complete
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            label.style.textDecoration = 'line-through';
            label.style.color = 'green';

            // move the item to the bottom
            document.getElementById('todoList').appendChild(todoItem);

            // playing a ding sound when finishing a to-do task =)
            const audio = new Audio('ding.mp3');
            audio.play();
        } else {
            label.style.textDecoration = 'none';
            label.style.color = '';
        }
    });

    // adding event listener for the delete button
    deleteButton.addEventListener('click', () => {
        todoItem.style.opacity = '0';
        setTimeout(() => todoItem.remove(), 500); 
    });
});


