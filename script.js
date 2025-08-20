document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents default submit

    let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let mobile = document.getElementById("mobile").value.trim();

    // Basic validation
    if (firstName === "" || lastName === "" || email === "" || password === "" || mobile === "") {
        alert("Please fill all required fields!");
        return;
    }

    // Password check
    if (password.length < 6) {
        alert("Password must be at least 6 characters long!");
        return;
    }

    // Mobile validation
    if (!/^[0-9]{10}$/.test(mobile)) {
        alert("Enter a valid 10-digit mobile number!");
        return;
    }

    alert("Form submitted successfully!");
    this.reset(); // Reset form after success
});
