document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('userForm');
    const nameInput = document.getElementById('name');
    const greeting = document.getElementById('greeting');

    // Check if a name is already stored
    const storedName = sessionStorage.getItem('userName');
    if (storedName) {
        greeting.textContent = `Welcome back, ${storedName}!`;
    }

    // Handle form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const userName = nameInput.value;

        // Store the name in session storage
        sessionStorage.setItem('userName', userName);

        // Update the greeting
        greeting.textContent = `Welcome, ${userName}!`;
    });
});
