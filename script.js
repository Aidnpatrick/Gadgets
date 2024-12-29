const button = document.getElementById('myButton');

// Function to handle clicks outside the button
function handleClickOutside(event) {
    if (!button.contains(event.target)) {
        // Perform the desired action
        button.style.opacity = '50%';
    }
    else (button.contains(Event.target)) {
        button.style.opacity = '80%';
    }
}

// Attach an event listener to the document
document.addEventListener('click', handleClickOutside);