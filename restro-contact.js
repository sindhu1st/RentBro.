




// Form validation
const form = document.querySelector('#contact form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Check for empty fields
    if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Check for valid email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(emailInput.value)) {
        alert('Invalid email address.');
        return;
    }

    // Send message (replace with your own API or server-side code)
    console.log('Message sent!');
    console.log({
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value,
    });

    // Reset form
    form.reset();
});

// Focus on first input field
nameInput.focus();

