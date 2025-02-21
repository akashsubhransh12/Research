document.getElementById("login-form").addEventListener("submit", async function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        // Send login data to the backend
        const response = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();

        if (response.ok) {
            alert("Login successful! Redirecting...");
            window.location.href = "research-paper.html"; // Redirect to the research paper request page
        } else {
            alert(data.message || "Invalid username or password.");
        }
    } catch (error) {
        console.error('Error during login:', error);
        alert("An error occurred. Please try again later.");
    }
});
