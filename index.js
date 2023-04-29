

// Handle sign up form submission
document.getElementById("signup-form").addEventListener("submit", (e) => {
  e.preventDefault(); // prevent form from submitting

  // Get form inputs
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirm-password").value;
  let name = document.getElementById("name").value;

  // Validate inputs
  if (
    email === "" ||
    password === "" ||
    confirmPassword === "" ||
    name === ""
  ) {
    alert("Please fill in all fields");
    return;
  }

  if (!validateEmail(email)) {
    alert("Please enter a valid email");
    return;
  }

  if (password !== confirmPassword) {
    alert("Password and confirm password do not match");
    return;
  }

  // Check if user already exists
  let users = JSON.parse(localStorage.getItem("users")) || [];
  let userExists = users.find((user) => user.email === email);
  if (userExists) {
    alert("User already exists");
    return;
  }

  // Create new user object and add to users array
  let newUser = { email: email, pass: password, name: name };
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  // Navigate to login page
  window.location.href = "login.html";
});

// Validate email format
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
