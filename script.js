// This file contains JavaScript functions to manipulate the DOM dynamically and respond to user interactions.

document.addEventListener('DOMContentLoaded', function() {
    // Get references to the buttons and elements in the DOM
    const changeTextButton = document.getElementById('changeText');
    const changeStyleButton = document.getElementById('changeStyle');
    const addElementButton = document.getElementById('addElement');
    const removeElementButton = document.getElementById('removeElement');
    const textElement = document.getElementById('textElement');
    const container = document.getElementById('elementContainer');

    // Event listener to change the text content of an element
    changeTextButton.addEventListener('click', function() {
        textElement.textContent = 'The text has been changed!';
    });

    // Event listener to modify the CSS styles of an element
    changeStyleButton.addEventListener('click', function() {
        textElement.style.color = 'blue'; // Change text color to blue
        textElement.style.fontSize = '20px'; // Change font size to 20px
    });

    // Event listener to add a new element to the container
    addElementButton.addEventListener('click', function() {
        const newElement = document.createElement('p'); // Create a new paragraph element
        newElement.textContent = 'A new paragraph has been added!'; // Set the text content
        container.appendChild(newElement); // Append the new element to the container
    });

    // Event listener to remove the last element from the container
    removeElementButton.addEventListener('click', function() {
        const lastElement = container.lastElementChild; // Get the last child element in the container
        if (lastElement) {
            container.removeChild(lastElement); // Remove the last child element if it exists
        }
    });
});