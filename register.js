document.getElementById('registration-form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Simple validation check
    if (!name || !email || !username || !password) {
        alert('Please fill all fields before submitting.');
        return;
    }

    try {
        // Send data to backend
        const response = await fetch('http://localhost:5000/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, username, password })
        });

        const result = await response.json();
        console.log("Response from server:", result); // Log the response

        if (response.ok) {
            alert(result.message + " Redirecting to Login...");
            window.location.href = 'login.html'; // Redirect on success
        } else {
            alert("Error: " + result.message);
        }
    } catch (error) {
        alert('Registration failed. Please try again later.');
        console.error('Error:', error);
    }
});
