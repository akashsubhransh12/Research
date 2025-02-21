document.getElementById("research-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get form data
    const paperTitle = document.getElementById("paper-title").value;
    const subject = document.getElementById("subject").value;
    const details = document.getElementById("details").value;

    // Process the request (for now, we'll just display an alert)
    alert(`Research Paper Request Submitted!\n\nTitle: ${paperTitle}\nSubject: ${subject}\nDetails: ${details}`);

    // Optionally, you can reset the form after submission
    document.getElementById("research-form").reset();
});
