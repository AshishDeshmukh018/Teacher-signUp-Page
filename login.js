// Handle login form submission
document.getElementById('login-form').addEventListener('submit', (e) => {
  e.preventDefault(); // prevent form from submitting

  // Get form inputs
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;

  // Validate inputs
  if (email === '' || password === '') {
    alert('Please fill in all fields');
    return;
  }

  // Check if user exists in local storage
  let users = JSON.parse(localStorage.getItem('users')) || [];
  let currentUser = users.find((user) => user.email === email && user.pass === password);
  if (!currentUser) {
    alert('Incorrect email or password');
    return;
  }

  // Generate random token
  let token = generateToken();

  // Update current user in local storage
  currentUser.token = token;
  localStorage.setItem('currentUser', JSON.stringify(currentUser));

  // Navigate to dashboard page
  window.location.href = 'dashboard.html';
});

// Generate random token
function generateToken() {
  let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let token = '';
  for (let i = 0; i < 16; i++) {
    token += chars[Math.floor(Math.random() * chars.length)];
  }
  return token;
}
