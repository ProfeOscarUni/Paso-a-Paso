document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Simple validation
    if (username === "" || password === "") {
        errorMessage.textContent = "All fields are required.";
        return;
    }

    if (username !== "user" || password !== "password") {
        errorMessage.textContent = "Invalid username or password.";
        return;
    }

    errorMessage.textContent = "Login successful!";
    errorMessage.style.color = "blue";
});
