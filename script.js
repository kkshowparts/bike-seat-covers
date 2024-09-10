// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Login form validation
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validate inputs
    if (username === '') {
        alert('Username is required');
        return;
    }

    if (password === '') {
        alert('Password is required');
        return;
    }

    // Perform login (this is just an example, you'd replace this with actual login logic)
    alert('Login successful');

    // Optionally, you can submit the form here or redirect the user
    // this.submit(); // Uncomment if you want to submit the form after validation
});


// Example valid credentials (for demonstration purposes)
const validEmail = "test@example.com";
const validPassword = "password123";

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Login form validation
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const email = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validate email format using regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address');
        return;
    }

    // Validate password length (example: must be at least 6 characters)
    if (password.length < 6) {
        alert('Password must be at least 6 characters long');
        return;
    }

    // Check if the email and password match the valid credentials
    if (email === validEmail && password === validPassword) {
        alert('Login successful');
        // Redirect the user to the website's main content or dashboard
        window.location.href = "#home"; // Redirect to the home section
    } else {
        alert('Invalid email or password');
    }
});
