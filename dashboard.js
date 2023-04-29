// Get current user from local storage
let currentUser = JSON.parse(localStorage.getItem('currentUser'));

// Check if current user exists, otherwise redirect to login page
if (!currentUser) {
  window.location.href = 'login.html';
}

// Display user name on dashboard
document.getElementById('teacher-name').innerHTML = currentUser.name;
document.getElementById('teacher-email').innerHTML = currentUser.email;


const changePasswordBtn = document.getElementById('change-password-btn');
  changePasswordBtn.addEventListener('click', changePassword);

  function changePassword() {
    const oldPasswordInput = document.getElementById('old-password');
    const newPasswordInput = document.getElementById('new-password');
  
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const users = JSON.parse(localStorage.getItem('users'));
  
    const userIndex = users.findIndex(user => user.email === currentUser.email);
  
    const oldPassword = oldPasswordInput.value;
    const newPassword = newPasswordInput.value;
  
    if (oldPassword === '') {
      alert('Please enter your old password.');
      return;
    }
  
    // Check if old password is correct
    if (users[userIndex].pass !== oldPassword) {
      alert('Incorrect old password. Please try again.');
      return;
    }
  
    // Update user password in local storage
    users[userIndex].pass = newPassword;
    localStorage.setItem('users', JSON.stringify(users));
  
    // Update current user object in local storage
    const updatedUser = { ...currentUser, pass: newPassword };
    localStorage.setItem('currentUser', JSON.stringify(updatedUser));
  
    alert('Password changed successfully!');
    oldPasswordInput.value = '';
    newPasswordInput.value = '';
  }
  